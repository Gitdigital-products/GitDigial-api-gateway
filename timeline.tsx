export function Timeline({ events }) {
  return (
    <div className="space-y-2">
      {events.map((e, i) => (
        <div key={i} className="p-2 border rounded">
          <p className="font-semibold">{e.action}</p>
          <p className="text-xs text-muted-foreground">{e.timestamp}</p>
          <pre className="text-xs">{JSON.stringify(e.payload, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}