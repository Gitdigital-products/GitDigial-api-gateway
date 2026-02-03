export function AuditTable({ logs }) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          <th>Action</th>
          <th>Loan</th>
          <th>User</th>
          <th>Timestamp</th>
          <th>Request ID</th>
        </tr>
      </thead>

      <tbody>
        {logs.map((log, i) => (
          <tr key={i} className="border-b">
            <td>{log.action}</td>
            <td>{log.loan_id}</td>
            <td>{log.user}</td>
            <td>{log.timestamp}</td>
            <td>{log.request_id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}