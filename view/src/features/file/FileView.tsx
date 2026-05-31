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
    <div key={index} className="flex py-1 hover:bg-muted/20 rounded px-1">
      {row.hexadecimal.map((x, i) => {
        const absIndex = index * 16 + i;

        return <ByteCell index={absIndex} value={x} key={absIndex} />;
      })}
    </div>
  );
};

type ByteCellProps = {
  index: number;
  value: string;
};

const ByteCell = ({ index, value }: ByteCellProps) => {
  const selectedByte = useFileStore((x) => x.selectedByte == index);
  const selectByte = useFileStore((x) => x.selectByte);
  return (
    <span
      key={index}
      onClick={() => selectByte(index)}
      className={`w-[2.4ch] px-[0.2ch] text-center cursor-pointer select-none rounded-sm ${
        selectedByte
          ? "bg-blue-500/20 text-blue-700 dark:text-blue-300"
          : "hover:bg-accent"
      }`}
    >
      {value}
    </span>
  );
};
