#!/usr/bin/env bash
set -euo pipefail

if [ -f .env ]; then
  export $(cat .env | xargs)
fi

node dist/index.js
