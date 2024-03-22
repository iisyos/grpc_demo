// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var index_pb = require('./index_pb.js');

function serialize_HelloRequest(arg) {
  if (!(arg instanceof index_pb.HelloRequest)) {
    throw new Error('Expected argument of type HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HelloRequest(buffer_arg) {
  return index_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HelloResponse(arg) {
  if (!(arg instanceof index_pb.HelloResponse)) {
    throw new Error('Expected argument of type HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HelloResponse(buffer_arg) {
  return index_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloService = exports.HelloService = {
  hello: {
    path: '/Hello/hello',
    requestStream: false,
    responseStream: false,
    requestType: index_pb.HelloRequest,
    responseType: index_pb.HelloResponse,
    requestSerialize: serialize_HelloRequest,
    requestDeserialize: deserialize_HelloRequest,
    responseSerialize: serialize_HelloResponse,
    responseDeserialize: deserialize_HelloResponse,
  },
};

exports.HelloClient = grpc.makeGenericClientConstructor(HelloService);
