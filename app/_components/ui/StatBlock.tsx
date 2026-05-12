export const StatBlock = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div>
    <div
      style={{
        fontFamily: "var(--font-hand)",
        fontSize: 32,
        color: "var(--accent)",
        fontWeight: 700,
        lineHeight: 1,
      }}
    >
      {value}
    </div>
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--muted-dark)",
        letterSpacing: "0.14em",
        marginTop: 4,
      }}
    >
      {label}
    </div>
  </div>
);
