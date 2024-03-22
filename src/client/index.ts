import express from 'express'
import * as grpc from '@grpc/grpc-js';
import { HelloClient } from '../proto/index_grpc_pb';
import { HelloRequest, HelloResponse } from '../proto/index_pb';

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.listen(3000, () => {
    console.log("Start on port 3000.")
    console.log("Start on port 3000.")
})

app.get('/', async(req: express.Request, res: express.Response) => {
    console.log("Hello, World!")
    // const client = new HelloClient(
    //     `localhost:6543`,
    //     grpc.credentials.createInsecure(),
    //   );
    // const request = new HelloRequest();
    // request.setName("hoge");

    // const promise = new Promise<HelloResponse>((resolve, reject) => {
    //     // @ts-ignore
    //     client.hello(request, (err, response) => {
    //         if (err) {
    //             reject(err);
    //         } else {
    //             if (response === undefined) {
    //                 return reject(new Error('response is undefined'));
    //             }
    //             resolve(response);
    //         }
    //     });
    // }
    // );

    // const result = await promise;
    // console.log(result.getResult());
    
    res.send(JSON.stringify({
        message: "Hello, World!",
        // result: result.getResult()
    }))
})
