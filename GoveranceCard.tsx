export function GovernanceCard({ item }) {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h3 className="font-semibold">{item.type}</h3>
      <p className="text-sm text-muted-foreground">Loan: {item.loan_id}</p>
      <p className="text-sm text-muted-foreground">Founder: {item.founder_id}</p>

      <a
        href={`/governance/${item.type}/${item.loan_id}`}
        className="mt-3 inline-block text-blue-600"
      >
        View Details →
      </a>
    </div>
  );
}