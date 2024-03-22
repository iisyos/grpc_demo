// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: index.proto

import * as index_pb from "./index_pb";
import * as grpc from "@grpc/grpc-js";

interface IHelloService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  hello: grpc.MethodDefinition<index_pb.HelloRequest, index_pb.HelloResponse>;
}

export const HelloService: IHelloService;

export interface IHelloServer extends grpc.UntypedServiceImplementation {
  hello: grpc.handleUnaryCall<index_pb.HelloRequest, index_pb.HelloResponse>;
}

export class HelloClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  hello(argument: index_pb.HelloRequest, callback: grpc.requestCallback<index_pb.HelloResponse>): grpc.ClientUnaryCall;
  hello(argument: index_pb.HelloRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<index_pb.HelloResponse>): grpc.ClientUnaryCall;
  hello(argument: index_pb.HelloRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<index_pb.HelloResponse>): grpc.ClientUnaryCall;
}
