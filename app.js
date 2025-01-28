//modulo express
const express = require('express');
const app = express();
const port = 3000;

//importo modulo funzione lista da controller
const postController = require('./controllers/posts.js');
//configurazione asset statici per media
app.use(express.static('public'));

//rotta index con metodo http
app.get('/', postController.index);

//rotta posts
app.get('/posts', postController.lista);


//istanziamento server su porta 
app.listen(port, () => {
    console.log(`Server sulla porta http://localhost:${port}`);
});