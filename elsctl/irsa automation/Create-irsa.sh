#!/usr/bin/env bash
set -euo pipefail

CLUSTER_NAME="${CLUSTER_NAME:-my-eks}"
NAMESPACE="${NAMESPACE:-gateway-prod}"
SERVICE_ACCOUNT="${SERVICE_ACCOUNT:-gateway-sa}"
ROLE_NAME="${ROLE_NAME:-gateway-kms-role}"
POLICY_FILE="policy.json"

cat > ${POLICY_FILE} <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["kms:Sign", "kms:GetPublicKey", "kms:DescribeKey"],
      "Resource": "*"
    }
  ]
}
EOF

eksctl create iamserviceaccount \
  --cluster ${CLUSTER_NAME} \
  --namespace ${NAMESPACE} \
  --name ${SERVICE_ACCOUNT} \
  --role-name ${ROLE_NAME} \
  --attach-policy-arn "arn:aws:iam::$(aws sts get-caller-identity --query Account --output text):policy/${ROLE_NAME}" \
  --approve
