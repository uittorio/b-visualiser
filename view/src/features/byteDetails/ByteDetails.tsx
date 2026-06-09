import { DecimalDetail, useFileStore } from "../../state/filesState";

export const ByteDetails = () => {
  const selectedByte = useFileStore((x) => x.selectedByteOffset);
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
        <Label>ASCII</Label>
        <Row label="Symbol" value={details.ascii_symbol} />
      </div>

      <Divider />

      <Decimal label="U8" details={details.decimal_8} />
      <Divider />
      <Decimal label="U16" details={details.decimal_16} />
      <Divider />
      <Decimal label="U32" details={details.decimal_32} />
      <Divider />
      <Decimal label="U64" details={details.decimal_64} />
      <Divider />
      <Decimal label="U128" details={details.decimal_128} />

      <Divider />

      <div className="space-y-2">
        <Label>BINARY</Label>
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

type DecimalProps = {
  details: DecimalDetail | null;
  label: string;
};

const Decimal = ({ label, details }: DecimalProps) => (
  <div className="space-y-1.5">
    <Label>
      {label} ({details?.hex})
    </Label>
    <Row label="BE" value={details?.be ?? null} />
    <Row label="LE" value={details?.le ?? null} />
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs text-muted-foreground tracking-wider mb-1">
    {children}
  </span>
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
