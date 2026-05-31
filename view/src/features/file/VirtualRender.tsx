import { useEffect, useRef, useState } from "react";

export type VirtualRenderProps = {
  containerClassName: string;
  rowHeight: number;
  listLength: number;
  render: (i: number) => React.JSX.Element;
};

export const VirtualRender = ({
  rowHeight,
  listLength,
  render,
  containerClassName: className,
}: VirtualRenderProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [containerScrollTop, setContainerScrollTop] = useState(0);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const observer = new ResizeObserver(() => {
      if (!containerRef.current) {
        return;
      }
      setContainerHeight(containerRef.current.clientHeight);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ref = containerRef.current;

    if (ref !== null) {
      ref.addEventListener("scroll", () =>
        setContainerScrollTop(ref.scrollTop),
      );
    }

    return () => {
      if (ref !== null) {
        ref.removeEventListener("scroll", () =>
          setContainerScrollTop(ref.scrollTop),
        );
      }
    };
  }, [listLength, rowHeight]);

  const data = findVisibleRowsAndVirtualSpace(
    rowHeight,
    listLength,
    containerScrollTop,
    containerHeight,
  );

  const rows = [];
  for (let i = data.rowStart; i < data.rowEnd; i++) {
    rows.push(render(i));
  }

  return (
    <div className={"h-full overflow-y-auto " + className} ref={containerRef}>
      <div style={{ height: data.virtualSpaceTop }} />
      {rows}
      <div style={{ height: data.virtualSpaceBottom }} />
    </div>
  );
};

const findVisibleRowsAndVirtualSpace = (
  rowHeight: number,
  rowsCount: number,
  scrollTop: number,
  viewPortHeight: number,
) => {
  const extraRows = 10;
  const numberOfVisibleRows =
    Math.floor(viewPortHeight / rowHeight) + extraRows;

  if (rowsCount < numberOfVisibleRows) {
    return {
      rowStart: 0,
      rowEnd: rowsCount,
      virtualSpaceTop: 0,
      virtualSpaceBottom: 0,
    };
  }

  const rowStart = Math.min(
    rowsCount - numberOfVisibleRows,
    Math.max(0, Math.floor(scrollTop / rowHeight) - 5),
  );
  const rowEnd = Math.min(rowsCount, rowStart + numberOfVisibleRows);
  const virtualSpaceTop = rowStart * rowHeight;

  const virtualSpaceBottom =
    (rowsCount - numberOfVisibleRows - rowStart) * rowHeight;

  return {
    rowStart: rowStart,
    rowEnd: rowEnd,
    virtualSpaceTop,
    virtualSpaceBottom,
  };
};
