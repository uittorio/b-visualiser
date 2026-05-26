import { useEffect } from "react";
import { Files } from "./features/filesList/Files";
import { FileView } from "./features/file/FileView";
import { FilterBar } from "./features/file/FilterBar";
import { ByteDetails } from "./features/byteDetails/ByteDetails";
import { useFileStore } from "./state/filesState";

export default function App() {
  const error = useFileStore((x) => x.error);
  const loading = useFileStore((x) => x.loading);

  useEffect(() => {
    useFileStore.getState().loadFiles();
  }, []);

  return (
    <>
      {error && (
        <span className="text-destructive text-sm p-4">{error.message}</span>
      )}
      <div className="grid grid-cols-12 h-dvh">
        <div className="col-span-2 border-r bg-muted/40 h-dvh">
          <div
            className={`h-full transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
          >
            <Files />
          </div>
        </div>
        <div className="col-span-7 border-r h-dvh flex flex-col">
          <div
            className={`flex flex-col h-full transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
          >
            <FilterBar />
            <FileView />
          </div>
        </div>
        <div className="col-span-3 border-l h-dvh">
          <div
            className={`h-full transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
          >
            <ByteDetails />
          </div>
        </div>
      </div>
    </>
  );
}
