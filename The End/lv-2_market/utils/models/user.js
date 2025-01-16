const { Schema, models } = require("mongoose");

const userSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});

const User = models?.User | mongoose.model('User', userSchema);