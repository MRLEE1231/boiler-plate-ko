const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name:{
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,//공백을 제거해주는 역할
    unique: 1
  },
  password:{
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    defualt: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}//다른 곳에서도 쓸 수 있게끔