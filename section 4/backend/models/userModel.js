const {model,Schema} =require('../connection');
// (./)(../)used for  relative positioning
const mySchema=new Schema({
    username :String,
    email:String,
    password:String,
    age:Number 
})
module.exports = model('userCollection',mySchema);
//prouduct router
