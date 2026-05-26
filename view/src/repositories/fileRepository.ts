export type FileStorageData = {
  id: string;
  name: string;
  arrayBuffer: ArrayBuffer;
};

let indexDBFileRepository: IndexDBFiles | null = null;

export class IndexDBFiles {
  private db: IDBDatabase;
  constructor(db: IDBDatabase) {
    this.db = db;
  }

  static async new(): Promise<IndexDBFiles | Error> {
    return new Promise<IndexDBFiles | Error>((res) => {
      const openRequest = indexedDB.open("B_VISUALIZER");

      openRequest.onblocked = function (e) {
        res(new Error(`db connection blocked: ${e}`));
      };

      openRequest.onsuccess = function () {
        const db = openRequest.result;
        res(new IndexDBFiles(db));
      };

      openRequest.onerror = function (e) {
        res(new Error(`error opening db connection: ${e}`));
      };

      openRequest.onupgradeneeded = () => {
        const db = openRequest.result;
        db.createObjectStore("FILES", { keyPath: "id" });
      };
    });
  }

  getAll(): Promise<FileStorageData[] | Error> {
    return new Promise<FileStorageData[] | Error>((res) => {
      const db = this.db;
      const transaction = db.transaction("FILES");
      const data = transaction.objectStore("FILES").getAll();

      data.onsuccess = function () {
        if (data.result !== undefined) {
          res(
            data.result.map((x) => {
              return {
                id: x.id,
                name: x.name,
                arrayBuffer: x.arrayBuffer,
              };
            }),
          );
        } else {
          res([]);
        }
      };

      data.onerror = function (e) {
        res(new Error(`Error getting files: ${e}`));
      };
    });
  }

  get(fileId: string): Promise<FileStorageData | Error> {
    return new Promise<FileStorageData | Error>((res) => {
      const db = this.db;
      const transaction = db.transaction("FILES");
      const data = transaction.objectStore("FILES").get(fileId);

      data.onsuccess = function () {
        if (data.result !== undefined) {
          res({
            id: data.result.id,
            name: data.result.name,
            arrayBuffer: data.result.arrayBuffer,
          });
        } else {
          res(new Error(`Error getting file`));
        }
      };

      data.onerror = function (e) {
        res(new Error(`Error getting file: ${e}`));
      };
    });
  }

  add(data: FileStorageData): Promise<void | Error> {
    return new Promise<void | Error>((res) => {
      const db = this.db;
      const transaction = db.transaction("FILES", "readwrite");
      const request = transaction.objectStore("FILES").put(data);

      request.onsuccess = function () {
        res();
      };

      request.onerror = function () {
        res(new Error(`Error storing file: ${request.error}`));
      };
    });
  }
}

export async function getDbConnection(): Promise<IndexDBFiles | Error> {
  if (indexDBFileRepository) return Promise.resolve(indexDBFileRepository);

  const db = await IndexDBFiles.new();

  if (db instanceof Error) {
    return db;
  }

  indexDBFileRepository = db;

  return indexDBFileRepository;
}
