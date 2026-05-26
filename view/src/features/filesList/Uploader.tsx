import { ChangeEvent, useRef } from "react";
import { UploadIcon } from "lucide-react";
import { useFileStore } from "../../state/filesState";

export const Uploader: React.FC = () => {
  const { addFile } = useFileStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files?.length) {
      const arrayBuffer = await files[0].arrayBuffer();

      addFile({
        arrayBuffer: arrayBuffer,
        id: files[0].name,
        name: files[0].name,
      });
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        onChange={onChange}
        className="hidden"
      />
      <button
        onClick={() => inputRef.current?.click()}
        className="w-full flex items-center justify-center gap-1.5 px-2 py-1.5 rounded border border-dashed border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
      >
        <UploadIcon className="w-3 h-3" />
        Upload file
      </button>
    </>
  );
};
