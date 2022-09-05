const mongoose= require('mongoose');
const databaseName= "julmttf200";
const url= `mongodb+srv://shivani:shivani@cluster0.eyxncbq.mongodb.net/${databaseName}?retryWrites=true&w=majority`
// connected to database 
// async function return a promise

mongoose.connect(url)//thenc--short-cut
.then((result) => {
    console.log('connected to database');
}).catch((err) => {
    console.log(err)
});

module.exports=mongoose;
// 1 asyncronus -simultaniously
