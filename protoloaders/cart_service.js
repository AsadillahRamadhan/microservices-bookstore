import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

let PROTO_PATH = './protos/cart.proto';


const Server = new grpc.Server();
const PORT = 50053;

let packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

let protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

let cart = protoDescriptor.CartService;

const Client = new cart(`localhost:${PORT}`, grpc.credentials.createInsecure());

const proto = {
    Server,
    PORT,
    cart,
    Client
};

export default proto;