import { getClient } from "@/lib/sdk";
import { DisbursementPanel } from "@/components/governance/DisbursementPanel";

export default async function DisbursementPage({ params }) {
  const client = getClient(process.env.GITDIGITAL_API_KEY!);
  const data = await client.governance.getDisbursementStatus(params.loanId);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Disbursement Approval</h1>
      <DisbursementPanel data={data} />
    </div>
  );
}