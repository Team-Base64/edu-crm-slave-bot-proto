#!/bin/bash

# generate js codes via grpc-tools
npx grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./slavebotts \
  --grpc_out=grpc_js:./slavebotts \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  -I ./ \
  ./*.proto

# generate d.ts codes
npx protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=grpc_js:./slavebotts \
  -I ./ \
  ./*.proto

# generate go codes via protoc
npx protoc \
  --go_out=./slavebotgo \
  --go-grpc_out=./slavebotgo \
  --go-grpc_opt=paths=source_relative \
  --go_opt=paths=source_relative \
  ./*.proto
