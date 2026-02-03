export function SignaturePanel({ data }) {
  return (
    <div className="space-y-4">
      {data.required_signatures.map((sig) => (
        <div key={sig.role} className="p-4 border rounded bg-white">
          <h3 className="font-semibold">{sig.role}</h3>
          <p>Status: {sig.signed ? "Signed" : "Pending"}</p>

          {!sig.signed && (
            <button className="mt-2">Sign as {sig.role}</button>
          )}
        </div>
      ))}
    </div>
  );
}