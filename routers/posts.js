//modulo express e router
const express = require('express');
const router = express.Router();

//importo il controller
const postsController = require('../controllers/posts.js');

//rotte siamo in /posts
router.get('/', postsController.index);


//per esportare il router
module.exports = router;