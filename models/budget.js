// models/budget.js
const mongoose = require('mongoose');
// ... (вміст budget.js) ...
const Budget = mongoose.model('Budget', budgetSchema);
module.exports = Budget;