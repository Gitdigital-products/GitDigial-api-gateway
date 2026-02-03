export function InterestPanel({ data }) {
  return (
    <div className="p-4 border rounded bg-white space-y-4">
      <p>Current Interest: {data.current_interest}%</p>
      <p>Proposed Interest: {data.proposed_interest}%</p>

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Approve
      </button>

      <button className="bg-red-600 text-white px-4 py-2 rounded">
        Reject
      </button>
    </div>
  );
}