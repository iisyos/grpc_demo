import * as grpc from '@grpc/grpc-js';
import { sendUnaryData } from '@grpc/grpc-js/build/src/server-call';
import { HelloRequest, HelloResponse } from '../proto/index_pb';
import { HelloService } from '../proto/index_grpc_pb';

const HelloServer = {
    hello: (call: grpc.ServerUnaryCall<HelloRequest, HelloResponse>, callback: sendUnaryData<HelloResponse>): void => {
        const request = call.request;
        const response = new HelloResponse();
        response.setResult("Hello," + request.getName())
        callback(null, response);
    }
}

function serve(): void {
    const server = new grpc.Server();
    server.addService(HelloService, HelloServer);
    server.bindAsync(`localhost:6543`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            throw err;
        }
        console.log(`Listening on ${port}`);
        server.start();
    });
}

serve();