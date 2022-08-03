const {find,remove,Constructor,update}=require('./js/database.cjs')
const express=require('express')
const cors=require("cors")
const app=express()
app.use(cors())
app.get('/show',(req,res)=>{
    find((err,ret)=>{res.send(ret)})
})
app.get('/delete',(req,res)=>{
    remove({_id:req.query.id},(err,ret)=>{
        if(err)res.send({mes:"失败remove"})
        else res.send({mes:"成功remove"})
    });
})
app.get('/change',(req,res)=>{
    // let form = new multiparty.Form();
    // form.parse(req, function(err,fields,file){
        const {title,event,others,id,date}=req.query
        if(id!=='0')update(id,{title,event,others,date,others},(err,ert)=>{
            if(err)res.send({mes:"失败update"})
            else res.send({mes:"成功update"})
        })
        else{
            new Constructor({title,event,others,date,others}).save((err,ert)=>{
                if(err)res.send({mes:"失败add",err})
                else res.send({mes:"成功add"})
            })
        }
    });
// })
app.listen(80)
