const express = require('express');//req ---short-cut


const router =express.Router();

router.get('/vid',(req,res)=>{
res.send('this is a video router');
})

module.exports=router;