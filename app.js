//modulo express
const express = require('express');
const app = express();
const port = 3000;

//importo modulo funzione lista da controller
const { lista } = require('./controllers/posts.js');
const { index } = require('./controllers/index.js');

//configurazione asset statici per media
app.use(express.static('public'));

//rotta index con metodo http
app.get('/', index);

//rotta posts
app.get('/posts', lista);


//istanziamento server su porta 
app.listen(port, () => {
    console.log(`Server sulla porta http://localhost:${port}`);
});