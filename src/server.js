const express = require('express');
require('dotenv').config();
const cookie_parser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 5000;
const router = require('../routes/router');
const path=require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie_parser());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(router);

app.get("*", function (req, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

app.all('*', (req, res) => {
    res.status(200).send('Ooops page not found');

})
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})