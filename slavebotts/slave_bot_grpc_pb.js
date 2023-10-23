// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var slave_bot_pb = require('./slave_bot_pb.js');

function serialize_slavebotgo_Message(arg) {
  if (!(arg instanceof slave_bot_pb.Message)) {
    throw new Error('Expected argument of type slavebotgo.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_slavebotgo_Message(buffer_arg) {
  return slave_bot_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var SlaveBotService = exports.SlaveBotService = {
  startChat: {
    path: '/slavebotgo.SlaveBot/StartChat',
    requestStream: true,
    responseStream: true,
    requestType: slave_bot_pb.Message,
    responseType: slave_bot_pb.Message,
    requestSerialize: serialize_slavebotgo_Message,
    requestDeserialize: deserialize_slavebotgo_Message,
    responseSerialize: serialize_slavebotgo_Message,
    responseDeserialize: deserialize_slavebotgo_Message,
  },
};

exports.SlaveBotClient = grpc.makeGenericClientConstructor(SlaveBotService);
