interface SummaryRowProps {
  label: string;
  value: string;
  borderPosition?: "b" | "t";
}

function SummaryRow({ label, value, borderPosition = "b" }: SummaryRowProps) {
  return (
    <div
      className={`border-secondary-300 flex justify-between border-${borderPosition}-1`}
    >
      <p className="text-secondary-50 py-3 text-lg">{label}</p>
      <p className="py-3 text-lg">${value}</p>
    </div>
  );
}

export default SummaryRow;
