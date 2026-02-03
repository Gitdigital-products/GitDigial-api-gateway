import { getClient } from "@/lib/sdk";
import { InterestPanel } from "@/components/governance/InterestPanel";

export default async function InterestPage({ params }) {
  const client = getClient(process.env.GITDIGITAL_API_KEY!);
  const data = await client.governance.getInterestReview(params.loanId);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Interest Review</h1>
      <InterestPanel data={data} />
    </div>
  );
}