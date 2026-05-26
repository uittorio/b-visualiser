import { FileIcon } from "lucide-react";
import { useFileStore } from "../../state/filesState";
import { Uploader } from "./Uploader";

export const Files: React.FC = () => {
  const { files, selectedFile, selectFile } = useFileStore();

  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b shrink-0">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Files
        </p>
        <Uploader />
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
        {files.length === 0 && (
          <p className="text-xs text-muted-foreground text-center py-6">
            No files yet
          </p>
        )}
        {files.map((f) => {
          const isSelected = selectedFile?.id === f.id;
          return (
            <button
              key={f.id}
              onClick={() => selectFile(f.id)}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-left text-xs transition-colors ${
                isSelected
                  ? "bg-accent text-accent-foreground font-medium"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              }`}
            >
              <FileIcon className="w-3 h-3 shrink-0" />
              <span className="truncate">{f.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
