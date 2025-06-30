const express = require('express')

const { getAllProduct, getSingleProductById, addProduct, updateProductById, partialUpdate, deleteProduct } = require('../controllers/product-controller')

const router = express.Router();

router.get('/get', getAllProduct);
router.get('/get/:id', getSingleProductById);
router.post('/add', addProduct)
router.put('/update/:id', updateProductById);
router.patch('/update/:id', partialUpdate);
router.delete('/delete/:id', deleteProduct);

module.exports = router;