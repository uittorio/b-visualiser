import { useEffect } from "react";
import { FileRow, useFileStore } from "../../state/filesState";
import { VirtualRender } from "./VirtualRender";

export const FileView = () => {
  const selectedFile = useFileStore((x) => x.selectedFile);
  const clearSelectedByte = useFileStore((x) => x.clearSelectedByte);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") clearSelectedByte();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [clearSelectedByte]);

  return (
    <VirtualRender
      containerClassName="p-6 font-mono"
      rowHeight={32}
      listLength={selectedFile?.rows.length ?? 0}
      render={(i) => (
        <FileRowCmp index={i} row={selectedFile!.rows[i]} key={i} />
      )}
    />
  );
};

type FileRowCmpProps = {
  index: number;
  row: FileRow;
};

const FileRowCmp = ({ index, row }: FileRowCmpProps) => {
  return (
    <div className="flex items-center gap-4">
      <span className="shrink-0 select-none text-muted-foreground/40 w-[10ch] text-right">
        {row.hex_offset}
      </span>

      <div className="flex py-1 hover:bg-muted/20 rounded px-1 w-[calc(16*2.4ch+0.4ch)] shrink-0">
        {row.hexadecimal.map((x, i) => (
          <Cell
            index={index * 16 + i}
            value={x}
            key={"hex-" + (index * 16 + i)}
            className="w-[2.4ch] px-[0.2ch]"
          />
        ))}
      </div>

      <div className="flex py-1 hover:bg-muted/20 rounded px-1">
        {row.ascii.map((x, i) => (
          <Cell
            index={index * 16 + i}
            value={x}
            key={"ascii-" + (index * 16 + i)}
            className="w-[1.4ch] px-[0.2ch]"
          />
        ))}
      </div>
    </div>
  );
};

type CellProps = {
  index: number;
  value: string;
  className: string;
};

const Cell = ({ index, value, className }: CellProps) => {
  const selectedByte = useFileStore((x) => x.selectedByteOffset == index);
  const isHighlighted = useFileStore((x) => {
    if (x.highlightedExtraBytes === null) {
      return false;
    }

    if (x.selectedByteOffset === null) {
      return false;
    }

    return index <= x.highlightedExtraBytes && index >= x.selectedByteOffset;
  });

  const selectByte = useFileStore((x) => x.selectByte);

  const selectedClassName = "bg-blue-500/20 text-blue-700 dark:text-blue-300";
  const higlightedClassName = "bg-blue-100/20 text-blue-500 dark:text-blue-300";
  return (
    <span
      key={index}
      onClick={() => selectByte(index)}
      className={`${className} text-center cursor-pointer select-none rounded-sm ${
        selectedByte
          ? selectedClassName
          : isHighlighted
            ? higlightedClassName
            : "hover:bg-accent"
      }`}
    >
      {value}
    </span>
  );
};
