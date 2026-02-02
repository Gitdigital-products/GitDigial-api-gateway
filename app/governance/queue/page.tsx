import { getClient } from "@/lib/sdk";
import { GovernanceCard } from "@/components/governance/GovernanceCard";

export default async function GovernanceQueue() {
  const client = getClient(process.env.GITDIGITAL_API_KEY!);
  const queue = await client.governance.listPending();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Governance Queue</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {queue.map((item) => (
          <GovernanceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}