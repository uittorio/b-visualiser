import { FileIcon, Trash2 } from "lucide-react";
import { useFileStore } from "../../state/filesState";
import { Uploader } from "./Uploader";
import { FileData } from "@/state/file";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export const Files: React.FC = () => {
  const { files } = useFileStore();

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
        {files.map((f) => (
          <FileRow file={f} key={f.id}></FileRow>
        ))}
      </div>
    </div>
  );
};

type FileRowProps = {
  file: FileData;
};

export const FileRow = ({ file }: FileRowProps) => {
  const { selectedFile, selectFile, removeFile } = useFileStore();

  const isSelected = selectedFile?.id === file.id;

  return (
    <div className="flex">
      <button
        key={file.id}
        onClick={() => selectFile(file.id)}
        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-left text-xs transition-colors ${
          isSelected
            ? "bg-accent text-accent-foreground font-medium"
            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
        }`}
      >
        <FileIcon className="w-3 h-3 shrink-0" />
        <span className="truncate">{file.name}</span>
      </button>
      <AlertDialog>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Deleting file {file.name}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => removeFile(file.id)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="xs">
            <Trash2 className="w-3 h-3 shrink-0" />
          </Button>
        </AlertDialogTrigger>
      </AlertDialog>
    </div>
  );
};
