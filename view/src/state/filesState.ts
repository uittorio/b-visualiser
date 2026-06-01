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

export type ByteDetails = {
  binary: string;
  be_decimal_8: string;
  le_decimal_8: string;
  be_decimal_16: string | null;
  le_decimal_16: string | null;
  be_decimal_32: string | null;
  le_decimal_32: string | null;
  be_decimal_64: string | null;
  le_decimal_64: string | null;
  be_decimal_128: string | null;
  le_decimal_128: string | null;
  ascii_symbol: string;
};

type FileState = {
  files: FileData[];
  selectedFile: SelectedFile | null;
  rawBytes: Uint8Array | null;
  loading: boolean;
  error: Error | null;
  selectedByte: number | null;
  byteDetails: ByteDetails | null;
  selectByte: (offset: number) => void;
  clearSelectedByte: () => void;
  loadFiles: () => Promise<void>;
  addFile: (file: FileStorageData) => Promise<void>;
  selectFile: (fileId: string) => Promise<void>;
};

export type FileRow = {
  bytes: number[];
  hexadecimal: string[];
  ascii: string[];
};

export type FileByteData = FileRow[];

export const useFileStore = create<FileState>((set, get) => ({
  files: [],
  selectedFile: null,
  rawBytes: null,
  loading: true,
  bytesRange: { from: 0, to: 1000 },
  error: null,
  selectedByte: null,
  byteDetails: null,
  selectByte: (offset: number) => {
    const { rawBytes, selectedByte } = get();
    if (!rawBytes) return;
    if (selectedByte === offset) {
      set({ selectedByte: null, byteDetails: null });
      return;
    }
    const result = details(rawBytes, offset) as ByteDetails;
    set({ selectedByte: offset, byteDetails: result });
  },
  clearSelectedByte: () => set({ selectedByte: null, byteDetails: null }),
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
      selectedByte: null,
      byteDetails: null,
      selectedFile: {
        id: file.id,
        name: file.name,
        rows: read(rawBytes, 0, rawBytes.length),
      },
    });
  },
}));
