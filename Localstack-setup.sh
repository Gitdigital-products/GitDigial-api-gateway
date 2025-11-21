#!/usr/bin/env bash
set -euo pipefail

# Create asymmetric key in LocalStack KMS
awslocal kms create-key --customer-master-key-spec ECC_SECG_P256K1 --key-usage SIGN_VERIFY --description "test-evm-key"

# get key id
KEY_ID=$(awslocal kms list-keys --query "Keys[0].KeyId" --output text)
# create alias
awslocal kms create-alias --alias-name alias/test-evm-key --target-key-id $KEY_ID

echo "Created local KMS key: $KEY_ID"
