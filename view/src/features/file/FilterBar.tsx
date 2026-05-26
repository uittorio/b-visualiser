import { useFileStore } from "../../state/filesState";

export const FilterBar = () => {
  const range = useFileStore((x) => x.bytesRange);
  const setByteRange = useFileStore((x) => x.setByteRange);
  const selectedByte = useFileStore((x) => x.selectedByte);

  const handleFromBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const n = parseInt(e.target.value, 10);
    if (!isNaN(n) && n >= 0) setByteRange(n, range.to);
    else e.target.value = String(range.from);
  };

  const handleToBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const n = parseInt(e.target.value, 10);
    if (!isNaN(n) && n >= 0) setByteRange(range.from, n);
    else e.target.value = String(range.to);
  };

  return (
    <div className="flex items-center gap-2 px-6 py-3 border-b font-mono text-sm shrink-0">
      <span className="text-xs text-muted-foreground select-none mr-1">
        Bytes
      </span>
      <input
        key={range.from}
        defaultValue={range.from}
        onBlur={handleFromBlur}
        className="w-[8ch] bg-muted/40 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-ring"
      />
      <span className="text-muted-foreground/50 select-none">–</span>
      <input
        key={range.to}
        defaultValue={range.to}
        onBlur={handleToBlur}
        className="w-[8ch] bg-muted/40 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-ring"
      />

      {selectedByte !== null && (
        <span className="ml-auto text-xs text-blue-500/80 select-none">
          offset {selectedByte} · Esc to clear
        </span>
      )}
    </div>
  );
};
