import proto from '../../protoloaders/cart_service.js';
import grpc from '@grpc/grpc-js';
import Cart from '../../models/Cart.js';
import '../../databases/connection.js';


const store = async (call, callback) => {
    const user = JSON.parse(Buffer.from(call.request.token.split('.')[1], 'base64').toString());
    const cart = await Cart.findOne({"userId": user.id});
    if(!cart){
        Cart.create({
            "userId": user.id,
            "books": [call.request.book]
        });
    } else {
        let isSame = false;
        cart.books.forEach(book => {
            if(book.bookId == call.request.book.bookId){
                book.qty += call.request.book.qty;
                isSame = true;
            }
        });
        if(!isSame){
            cart.books.push(call.request.book);
        }
        await Cart.findByIdAndUpdate(cart._id, {books: cart.books});
        
    }
    return callback(null, {message: "Buku berhasil ditambahkan ke keranjang!"});
}

proto.Server.addService(proto.cart.service, {
    Store: store,
});


proto.Server.bindAsync(`0.0.0.0:${proto.PORT}`, grpc.ServerCredentials.createInsecure(),
(e, port) => {
    if(e){
        console.log(e)
        
    }
    console.log(`Server running at http://localhost:${proto.PORT}`);
    
}
);