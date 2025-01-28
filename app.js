//modulo express
const path = require('path');
const express = require('express');
const app = express();
const postRouter = require('./routers/posts.js');
const port = process.env.PORT || 3000;
const postController = require('./controllers/posts.js');

//configurazione asset statici per media
app.use(express.static('./public'));

//rotta index con metodo http
app.get('/', postController.index);

app.use('/posts', postRouter);

//istanziamento server su porta 
app.listen(port, () => {
    console.log(`Server sulla porta http://localhost:${port}`);
});