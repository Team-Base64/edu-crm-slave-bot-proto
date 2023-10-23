// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var slave_bot_pb = require('./slave_bot_pb.js');

function serialize_slavebotgrpc_Message(arg) {
  if (!(arg instanceof slave_bot_pb.Message)) {
    throw new Error('Expected argument of type slavebotgrpc.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_slavebotgrpc_Message(buffer_arg) {
  return slave_bot_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var SlaveBotService = exports.SlaveBotService = {
  startChat: {
    path: '/slavebotgrpc.SlaveBot/StartChat',
    requestStream: true,
    responseStream: true,
    requestType: slave_bot_pb.Message,
    responseType: slave_bot_pb.Message,
    requestSerialize: serialize_slavebotgrpc_Message,
    requestDeserialize: deserialize_slavebotgrpc_Message,
    responseSerialize: serialize_slavebotgrpc_Message,
    responseDeserialize: deserialize_slavebotgrpc_Message,
  },
};

exports.SlaveBotClient = grpc.makeGenericClientConstructor(SlaveBotService);
