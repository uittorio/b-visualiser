import { useFileStore } from "../../state/filesState";

export const ByteDetails = () => {
  const selectedByte = useFileStore((x) => x.selectedByte);
  const details = useFileStore((x) => x.byteDetails);

  if (selectedByte === null || !details) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
        Select a byte to inspect
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-5 font-mono text-sm space-y-5">
      <div className="space-y-2">
        <Label>Ascii</Label>
        <Row label="Symbol" value={details.ascii_symbol} />
      </div>

      <Divider />

      <div className="space-y-1.5">
        <Label>u8</Label>
        <Row label="BE" value={details.be_decimal_8} />
        <Row label="LE" value={details.le_decimal_8} />
      </div>

      <Divider />

      <div className="space-y-1.5">
        <Label>u16</Label>
        <Row label="BE" value={details.be_decimal_16} />
        <Row label="LE" value={details.le_decimal_16} />
      </div>

      <Divider />

      <div className="space-y-1.5">
        <Label>u32</Label>
        <Row label="BE" value={details.be_decimal_32} />
        <Row label="LE" value={details.le_decimal_32} />
      </div>

      <Divider />

      <div className="space-y-1.5">
        <Label>u64</Label>
        <Row label="BE" value={details.be_decimal_64} />
        <Row label="LE" value={details.le_decimal_64} />
      </div>

      <Divider />

      <div className="space-y-1.5">
        <Label>u128</Label>
        <Row label="BE" value={details.be_decimal_128} />
        <Row label="LE" value={details.le_decimal_128} />
      </div>

      <Divider />

      <div className="space-y-2">
        <Label>Binary</Label>
        <div className="flex gap-1">
          {details.binary.split("").map((bit, i) => (
            <div
              key={i}
              className={`w-7 h-7 flex items-center justify-center rounded text-xs font-bold ${
                bit === "1"
                  ? "bg-blue-500/20 text-blue-700 dark:text-blue-300"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {bit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
    {children}
  </p>
);

const Row = ({ label, value }: { label: string; value: string | null }) => (
  <div className="flex items-center justify-between">
    <span className="text-xs text-muted-foreground w-6">{label}</span>
    <span className="text-foreground">
      {value === null ? (
        <span className="text-muted-foreground/40">—</span>
      ) : (
        value
      )}
    </span>
  </div>
);

const Divider = () => <div className="border-t border-border/50" />;
