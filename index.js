const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('hello world')
})

const data =(req,res) =>{
    res.send('Hello world')
}

app.post('/user',data)

app.listen(3000,()=>{
    console.log('Example app listening on port 3000')
})