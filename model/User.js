
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    avatar: { type: String, default: null },
  name: { type: String, required: true, minlength: 1, maxlength: 50 },
 
  email: { type: String, required: true, unique: true , },
  phoneNumber : {type : Number, required : true, minlength: 10, maxlength: 10} , 
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}); 

module.exports = mongoose.model('User', userSchema);
// ....................................................................................................

