// models/transaction.js
const mongoose = require('mongoose');
// ... (вміст transaction.js) ...
const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;