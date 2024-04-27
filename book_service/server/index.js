import proto from '../../protoloaders/book_service.js';
import grpc from '@grpc/grpc-js';
import Book from '../../models/Book.js';
import '../../databases/connection.js';

const getAllBook = async (call, callback) => {
    const books = await Book.find(
        {
            '$or': [
                {
                    name: {'$regex': call.request.query, '$options' : 'i'},
                },
                {
                    author: {'$regex': call.request.query, '$options' : 'i'},
                },
            ]
        }
    );
    return callback(null, { book: books });
}

const getBook = async (call, callback) => {
    const book = await Book.findOne({"slug": call.request.slug});
    return callback(null, {book: book});
}

proto.Server.addService(proto.book.service, {
    GetAllBook: getAllBook,
    GetBook: getBook
});


proto.Server.bindAsync(`0.0.0.0:${proto.PORT}`, grpc.ServerCredentials.createInsecure(),
(e, port) => {
    if(e){
        console.log(e)
        
    }
    console.log(`Server running at http://localhost:${proto.PORT}`);
    
}
);