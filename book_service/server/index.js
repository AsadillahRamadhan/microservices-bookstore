import proto from '../../protoloaders/book_service.js';
import grpc from '@grpc/grpc-js';
import Book from '../../models/Book.js';
import '../../databases/connection.js';

const getAllBook = async (call, callback) => {
    let books;
    books = await Book.find(
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


proto.Server.addService(proto.book.service, {
    GetAllBook: getAllBook
});


proto.Server.bindAsync(`0.0.0.0:${proto.PORT}`, grpc.ServerCredentials.createInsecure(),
(e, port) => {
    if(e){
        console.log(e)
        
    }
    console.log(`Server running at http://localhost:${proto.PORT}`);
    
}
);