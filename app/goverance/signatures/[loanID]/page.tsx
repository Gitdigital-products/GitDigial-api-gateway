import { getClient } from "@/lib/sdk";
import { SignaturePanel } from "@/components/governance/SignaturePanel";

export default async function SignaturePage({ params }) {
  const client = getClient(process.env.GITDIGITAL_API_KEY!);
  const data = await client.governance.getSignatureStatus(params.loanId);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Signatures for Loan {params.loanId}</h1>
      <SignaturePanel data={data} />
    </div>
  );
}