import { create } from "zustand";
import {
  FileStorageData,
  getDbConnection,
} from "../repositories/fileRepository";
import { FileData } from "./file";
import init, { read, details } from "engine";

type SelectedFile = FileData & {
  rows: FileRow[];
};

export type DecimalDetail = {
  be: string;
  le: string;
  hex: string;
};

export type Utf8Detail = {
  value: string;
  byte_start: number;
  byte_end: number;
  hex: string;
};

export type ByteDetails = {
  binary: string;
  decimal_8: DecimalDetail;
  decimal_16: DecimalDetail | null;
  decimal_32: DecimalDetail | null;
  decimal_64: DecimalDetail | null;
  decimal_128: DecimalDetail | null;
  ascii_symbol: string;
  utf8?: Utf8Detail;
};

type FileState = {
  files: FileData[];
  selectedFile: SelectedFile | null;
  rawBytes: Uint8Array | null;
  loading: boolean;
  error: Error | null;
  selectedByteOffset: number | null;
  byteDetails: ByteDetails | null;
  bytesHighlightedRange: [number, number] | null;
  selectByte: (offset: number) => void;
  highlightExtraBytes: (start: number, end: number) => void;
  resetHighlightBytes: () => void;
  clearSelectedByte: () => void;
  loadFiles: () => Promise<void>;
  addFile: (file: FileStorageData) => Promise<void>;
  selectFile: (fileId: string) => Promise<void>;
  removeFile: (fileId: string) => Promise<void>;
};

export type FileRow = {
  bytes: number[];
  hexadecimal: string[];
  ascii: string[];
  hex_offset: string;
};

export const useFileStore = create<FileState>((set, get) => ({
  files: [],
  selectedFile: null,
  rawBytes: null,
  loading: true,
  error: null,
  selectedByteOffset: null,
  bytesHighlightedRange: null,
  byteDetails: null,
  selectByte: (offset: number) => {
    const { rawBytes, selectedByteOffset: selectedByte } = get();
    if (!rawBytes) return;
    if (selectedByte === offset) {
      set({ selectedByteOffset: null, byteDetails: null });
      return;
    }
    const result = details(rawBytes, offset) as ByteDetails;
    set({ selectedByteOffset: offset, byteDetails: result });
  },
  highlightExtraBytes: (start: number, end: number) => {
    set({ bytesHighlightedRange: [start, end] });
  },
  resetHighlightBytes: () => {
    set({ bytesHighlightedRange: null });
  },
  clearSelectedByte: () => set({ selectedByteOffset: null, byteDetails: null }),
  loadFiles: async () => {
    set({ loading: true, error: null });

    const initDatabase = await getDbConnection();
    if (initDatabase instanceof Error) {
      set({ error: initDatabase, loading: false });
    } else {
      const files = await initDatabase.getAll();

      if (files instanceof Error) {
        set({ error: files, loading: false });
      } else {
        await init();
        set({
          files: files.map((x) => ({ id: x.id, name: x.name })),
          loading: false,
        });
      }
    }
  },
  addFile: async (file: FileStorageData) => {
    set({ loading: true, error: null });

    const db = await getDbConnection();
    if (db instanceof Error) {
      set({ error: db, loading: false });
    } else {
      const result = await db.add(file);
      set({ loading: false });

      if (result instanceof Error) {
        set({ error: result, loading: false });
      } else {
        const rawBytes = new Uint8Array(file.arrayBuffer);
        set({
          rawBytes,
          selectedFile: {
            id: file.id,
            name: file.name,
            rows: read(rawBytes, 0, rawBytes.length),
          },
        });
        get().loadFiles();
      }
    }
  },
  selectFile: async (fileId: string) => {
    const db = await getDbConnection();
    if (db instanceof Error) {
      set({ error: db });
      return;
    }
    const file = await db.get(fileId);
    if (file instanceof Error) {
      set({ error: file });
      return;
    }
    const rawBytes = new Uint8Array(file.arrayBuffer);
    set({
      rawBytes,
      selectedByteOffset: null,
      byteDetails: null,
      selectedFile: {
        id: file.id,
        name: file.name,
        rows: read(rawBytes, 0, rawBytes.length),
      },
    });
  },
  removeFile: async (fileId: string) => {
    const db = await getDbConnection();
    const selectedFile = get().selectedFile;
    if (db instanceof Error) {
      set({ error: db });
      return;
    }
    const file = await db.get(fileId);
    if (file instanceof Error) {
      set({ error: file });
      return;
    }

    await db.remove(fileId);

    set({
      files: get().files.filter((f) => f.id !== fileId),
      selectedFile: fileId === selectedFile?.id ? null : selectedFile,
    });
  },
}));
