const express=require('express');
const userRouter =require('./routers/userRouter')
const videoRouter =require('./routers/videoRouter')
const cors =require("cors");
const app=express();
const port=5000;
// this will parse JSON
app.use(express.json());
app.use(cors({orign:['http://localhost:5000']}))
// middlew
app.use('/user',userRouter)
app.use('/video',videoRouter)

// route

app.get('/',(req,res)=>{
res.send('responsefrom express');
})
// route or endpoint--to process a request
app.get('/home',(req,res)=>{
res.send('ooo hooooo!!!!');
})//
app.listen(port,()=>{

    console.log('server has started');
});