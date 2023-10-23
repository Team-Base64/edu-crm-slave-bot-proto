#!/bin/bash

# generate js codes via grpc-tools
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./ \
  --grpc_out=grpc_js:./ \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  -I ./ \
  ./*.proto

# generate go codes via protoc
protoc --go_out=. --go-grpc_out=. \
  --go-grpc_opt=paths=source_relative \
  --go_opt=paths=source_relative \
  *.proto
