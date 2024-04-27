import mongoose from 'mongoose';

const Cart = mongoose.model('Cart', {
    userId: {
        type: String,
        required: true
    },
    books: {
        type: Array
    }
});

export default Cart;