import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

let PROTO_PATH = './protos/book.proto';


const Server = new grpc.Server();
const PORT = 50052;

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

let book = protoDescriptor.BookService;

const Client = new book(`localhost:${PORT}`, grpc.credentials.createInsecure());

const proto = {
    Server,
    PORT,
    book,
    Client
};

export default proto;