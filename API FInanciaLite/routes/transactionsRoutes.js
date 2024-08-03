const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/transactions', transactionController.createTransaction);
router.get('/transactions/:userId', transactionController.getTransactions);
router.get('/transaction/:id', transactionController.getTransactionById);
router.put('/transaction/:id', transactionController.updateTransaction);
router.delete('/transaction/:id', transactionController.deleteTransaction);

module.exports = router;
