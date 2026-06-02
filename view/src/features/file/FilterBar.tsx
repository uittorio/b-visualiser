import { useFileStore } from "../../state/filesState";

type FilterBarProps = {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
};

export const FilterBar = ({ onToggleSidebar, sidebarOpen }: FilterBarProps) => {
  const selectedByte = useFileStore((x) => x.selectedByte);
  const selectedFile = useFileStore((x) => x.selectedFile);

  return (
    <div className="flex items-center gap-3 px-3 py-3 border-b font-mono text-sm shrink-0 h-8">
      <button
        onClick={onToggleSidebar}
        className="text-muted-foreground hover:text-foreground transition-colors"
        title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v18" />
        </svg>
      </button>
      <span className="text-blue-500/80">{selectedFile?.name}</span>
      {selectedByte !== null && (
        <span className="ml-auto text-xs text-blue-500/80 select-none">
          offset {selectedByte} · Esc to clear
        </span>
      )}
    </div>
  );
};
