import Book from '../models/Book.js';
import '../databases/connection.js';
import fs from 'fs';
import chalk from 'chalk';

const data = fs.readFileSync('./dummy/books.json');

try {
    Book.insertMany(JSON.parse(data));
    console.log(chalk.bgGreen.bold(`SUCCESS!..........................books.js`));
} catch (e) {
    console.log(chalk.bgRed.bold(`FAILED!...........................books.js`));
}
