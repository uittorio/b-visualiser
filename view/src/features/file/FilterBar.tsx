import { useFileStore } from "../../state/filesState";

export const FilterBar = () => {
  const selectedByte = useFileStore((x) => x.selectedByte);

  return (
    <div className="flex items-center gap-2 px-6 py-3 border-b font-mono text-sm shrink-0 h-8">
      {selectedByte !== null && (
        <span className="ml-auto text-xs text-blue-500/80 select-none">
          offset {selectedByte} · Esc to clear
        </span>
      )}
    </div>
  );
};
