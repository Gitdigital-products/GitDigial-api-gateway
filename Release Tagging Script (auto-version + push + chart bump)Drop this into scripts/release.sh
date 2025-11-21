#!/usr/bin/env bash
set -euo pipefail

VERSION=$1

if [[ -z "$VERSION" ]]; then
  echo "Usage: ./release.sh v1.0.0"
  exit 1
fi

# Update Helm chart version
yq e -i ".version = \"$VERSION\"" charts/gateway/Chart.yaml
yq e -i ".appVersion = \"$VERSION\"" charts/gateway/Chart.yaml

# Commit + tag
git add charts/gateway/Chart.yaml
git commit -m "chore: release $VERSION"
git tag -a "$VERSION" -m "Release $VERSION"
git push origin main --tags

echo "Release $VERSION created and pushed!"
