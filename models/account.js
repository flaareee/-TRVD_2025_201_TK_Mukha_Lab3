// models/account.js
const mongoose = require('mongoose');
// ... (вміст account.js) ...
const Account = mongoose.model('Account', accountSchema);
module.exports = Account;