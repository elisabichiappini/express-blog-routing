//modulo express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//modulo router post e controller post
const postRouter = require('./routers/posts.js');
const postController = require('./controllers/posts.js');

//configurazione asset statici per media
app.use(express.static('public'));

//rotta index con metodo http
app.get('/', (req, res) => {
    res.send('<h1 style="text-align:center;font-family:sans-serif;color:red;">Eliblog</h1>')
}
);

//registrazione router dentro app.js con prefisso /posts
app.use('/posts', postRouter);

//istanziamento server su porta 
app.listen(port, () => {
    console.log(`Server sulla porta http://localhost:${port}`);
});