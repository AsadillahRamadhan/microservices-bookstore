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
    isbn: {
        type: String
    },
    genre: {
        type: Object // data ini berisikan object untuk genre
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
    price: {
        type: Number
    },
    availability: {
        type: String
    },
    format: {
        type: Array // data ini berisikan array untuk format, misal soft-copy, hard-copy dll
    },
    page: {
        type: Number
    },
    dimension: {
        type: Object // data ini berisikan object dengan atribut height, width, dan length
    },
    weight: {
        type: mongoose.Decimal128
    },
    cover: {
        type: String
    },
    rating: {
        type: Object // data ini berisikan object dengan atribut username, rate, dan comment
    }
});

export default Book;