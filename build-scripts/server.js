import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
    res.json([
        {"id": 1, "firstName": "Jorge", "lastName": "Mancia", "email": "jmancia2@gmail.com"}
    ]);
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
