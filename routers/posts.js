//modulo express e router
const express = require('express');
const router = express.Router();

//importo il controller
const postsController = require('../controllers/posts.js');


//rotte siamo in /posts
router.get('/', postsController.index);
router.get('/create', postsController.create);
router.get('/:slug', postsController.show);
router.get('/:slug/download', postsController.download);

//per esportare il router
module.exports = router;