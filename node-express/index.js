const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/leossdb',{
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=> console.log("DB 연결 성공"))
.catch(err=> console.log(err))

app.get('/', (req,res) => res.send('hello world!'))
app.listen(port, ()=> console.log(`listening on port ${port}!`))