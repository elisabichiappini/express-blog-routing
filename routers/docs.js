const express = require('require');
const router = express.Router();
const path = require('path');

const docsController = require('../controllers/docs.js');

router.get('/:file/download', docsController);