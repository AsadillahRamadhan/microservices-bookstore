import mongoose from 'mongoose';

const Book = mongoose.model('Book', {
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    isbn: {
        type: String
    },
    genre: {
        type: Object
    },
    publisher: {
        type: String
    },
    publicationDate: {
        type: Date
    },
    language: {
        type: String
    },
    description: {
        type: String
    },
    format: {
        type: Array
    },
    page: {
        type: Number
    },
    dimension: {
        type: Object
    },
    weight: {
        type: mongoose.Decimal128
    },
    cover: {
        type: String
    },
    rating: {
        type: Object 
    }
});

export default Book;