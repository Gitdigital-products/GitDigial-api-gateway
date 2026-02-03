import { getClient } from "@/lib/sdk";
import { AuditTable } from "@/components/governance/AuditTable";

export default async function AuditPage() {
  const client = getClient(process.env.GITDIGITAL_API_KEY!);
  const logs = await client.governance.getAuditLogs();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Audit Logs</h1>
      <AuditTable logs={logs} />
    </div>
  );
}