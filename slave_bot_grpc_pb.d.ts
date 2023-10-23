// package: slavebotgrpc
// file: slave_bot.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as slave_bot_pb from "./slave_bot_pb";

interface ISlaveBotService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    startChat: ISlaveBotService_IStartChat;
}

interface ISlaveBotService_IStartChat extends grpc.MethodDefinition<slave_bot_pb.Message, slave_bot_pb.Message> {
    path: "/slavebotgrpc.SlaveBot/StartChat";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<slave_bot_pb.Message>;
    requestDeserialize: grpc.deserialize<slave_bot_pb.Message>;
    responseSerialize: grpc.serialize<slave_bot_pb.Message>;
    responseDeserialize: grpc.deserialize<slave_bot_pb.Message>;
}

export const SlaveBotService: ISlaveBotService;

export interface ISlaveBotServer extends grpc.UntypedServiceImplementation {
    startChat: grpc.handleBidiStreamingCall<slave_bot_pb.Message, slave_bot_pb.Message>;
}

export interface ISlaveBotClient {
    startChat(): grpc.ClientDuplexStream<slave_bot_pb.Message, slave_bot_pb.Message>;
    startChat(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<slave_bot_pb.Message, slave_bot_pb.Message>;
    startChat(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<slave_bot_pb.Message, slave_bot_pb.Message>;
}

export class SlaveBotClient extends grpc.Client implements ISlaveBotClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public startChat(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<slave_bot_pb.Message, slave_bot_pb.Message>;
    public startChat(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<slave_bot_pb.Message, slave_bot_pb.Message>;
}
