import { useEffect } from "react";
import { useFileStore } from "../../state/filesState";

export const FileView = () => {
  const selectedFile = useFileStore((x) => x.selectedFile);
  const bytesRange = useFileStore((x) => x.bytesRange);
  const selectedByte = useFileStore((x) => x.selectedByte);
  const selectByte = useFileStore((x) => x.selectByte);
  const clearSelectedByte = useFileStore((x) => x.clearSelectedByte);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") clearSelectedByte();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [clearSelectedByte]);

  return (
    <div className="h-full overflow-y-auto p-6 font-mono">
      {selectedFile?.rows.map((row, rowIndex) => {
        return (
          <div
            key={rowIndex}
            className="flex py-1 hover:bg-muted/20 rounded px-1"
          >
            {row.hexadecimal.map((x, i) => {
              const absOffset = bytesRange.from + rowIndex * 16 + i;
              const selected = selectedByte === absOffset;
              return (
                <span
                  key={i}
                  onClick={() => selectByte(absOffset)}
                  className={`w-[2.4ch] px-[0.2ch] text-center cursor-pointer select-none ${
                    selected
                      ? "bg-blue-500/20 text-blue-700 dark:text-blue-300"
                      : "rounded-sm hover:bg-accent"
                  }`}
                >
                  {x}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
