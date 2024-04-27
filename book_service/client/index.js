import express from 'express';
import bodyParser from 'body-parser';
import proto from '../../protoloaders/book_service.js';

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/get-all-book', (req, res) => {
    const token = `123`;
    const request = {
        token: token,
        query: req.query.query
    }
    proto.Client.GetAllBook(request, (error, response) => {
    if(error){
        res.status(500).json({"error": error});
    } else {
        res.status(201).json(response);
    }
});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

