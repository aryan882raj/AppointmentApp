const path = require('path');

const express = require('express');
const ProductController = require('../controllers/product');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))
});

router.post('/add-user', ProductController.postProduct);

router.delete('/delete-Product/:id', ProductController.DeletePost)

router.get('/get-user', ProductController.GetAllData)

module.exports = router;