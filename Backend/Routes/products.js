const express = require('express');
const router = express.Router();
const { isSignedIn } = require('../controllers/auth');
const { AddProduct,GetProducts }  = require('../Controllers/products')
const { body } = require('express-validator');

router.post('/addproduct',isSignedIn,AddProduct);
router.get('/getproducts',GetProducts);

module.exports = router;
