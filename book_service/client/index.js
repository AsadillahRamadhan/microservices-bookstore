import express from 'express';
import bodyParser from 'body-parser';
import proto from '../../protoloaders/book_service.js';

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/get-all-book', (req, res) => {
    const request = {
        token: '',
        query: req.query.query
    }
    proto.Client.GetAllBook(request, (error, response) => {
    if(error){
        return res.status(500).json({"error": error});
    }
    return res.status(201).json(response);
    });
});

app.get('/api/book/:slug', (req, res) => {
    const request = {
        token: '',
        slug: req.params.slug
    }
    proto.Client.GetBook(request, (error, response) => {
        if(error){
            return res.status(500).json({"error": error});
        }
        return res.status(201).json(response);
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

