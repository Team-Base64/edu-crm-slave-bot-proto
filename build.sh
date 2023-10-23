#!/bin/bash

# generate js codes via grpc-tools
npx grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./ts \
  --grpc_out=grpc_js:./ts \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  -I ./ \
  ./*.proto

# generate d.ts codes
npx protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=grpc_js:./ts \
  -I ./ \
  ./*.proto

# generate go codes via protoc
npx protoc \
  --go_out=./go \
  --go-grpc_out=./go \
  --go-grpc_opt=paths=source_relative \
  --go_opt=paths=source_relative \
  *.proto
