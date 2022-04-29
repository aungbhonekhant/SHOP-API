const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const {getAllProductsStatic, getAllProducts} = require('../controllers/products');

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);

module.exports = router;