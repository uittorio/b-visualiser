import { useEffect, useState } from "react";
import { Files } from "./features/filesList/Files";
import { FileView } from "./features/file/FileView";
import { FilterBar } from "./features/file/FilterBar";
import { ByteDetails } from "./features/byteDetails/ByteDetails";
import { useFileStore } from "./state/filesState";

export default function App() {
  const error = useFileStore((x) => x.error);
  const loading = useFileStore((x) => x.loading);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    useFileStore.getState().loadFiles();
  }, []);

  return (
    <>
      {error && (
        <span className="text-destructive text-sm p-4">{error.message}</span>
      )}
      <div className="flex h-dvh overflow-hidden">
        <div
          className={`shrink-0 border-r bg-muted/40 transition-all duration-200 ${
            sidebarOpen ? "w-56" : "w-0"
          }`}
        >
          <div className="h-full w-56 overflow-hidden">
            <div
              className={`h-full transition-opacity duration-200 ${
                loading || !sidebarOpen
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
            >
              <Files />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col border-r h-dvh min-w-0">
          <div
            className={`flex flex-col h-full transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
          >
            <FilterBar
              onToggleSidebar={() => setSidebarOpen((v) => !v)}
              sidebarOpen={sidebarOpen}
            />
            <FileView />
          </div>
        </div>

        <div className="w-90 shrink-0 border-l h-dvh">
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
