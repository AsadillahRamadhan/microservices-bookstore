import express from 'express';
import bodyParser from 'body-parser';
import proto from '../../protoloaders/cart_service.js';

const app = express();
const PORT = 3002;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/add-to-cart', (req, res) => {
    const book = req.body.book;
    const token = req.body.token;
    const request = {
        book: book,
        token: token
    };
    proto.Client.Store(request, (error, response) => {
        if(error){
            return res.status(500).json({"error": error});
        }
        return res.status(201).json(response);
    });
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

