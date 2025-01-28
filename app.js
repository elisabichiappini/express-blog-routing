//modulo express
const path = require('path');
const express = require('express');
const app = express();
const postRouter = require('./routers/posts.js');
const port = process.env.PORT || 3000;

//configurazione asset statici per media
app.use(express.static('./public'));

//rotta index con metodo http
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, './index.html');
    res.sendFile(filePath);
});

app.use('/posts', postRouter);

//istanziamento server su porta 
app.listen(port, () => {
    console.log(`Server sulla porta http://localhost:${port}`);
});