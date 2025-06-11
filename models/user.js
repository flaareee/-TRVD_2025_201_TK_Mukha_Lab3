// models/user.js
const mongoose = require('mongoose');
// ... (вміст user.js) ...
const User = mongoose.model('User', userSchema);
module.exports = User;