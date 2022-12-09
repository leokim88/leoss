const express = require('express')
const app = express()
const port = 5000
const bodypsr = require('body-parser');
const {User} = require('./models/User');

const cfg = require('./config/key');

app.use(bodypsr.urlencoded({extended:true}));
app.use(bodypsr.json());

const mongoose = require('mongoose')
mongoose.connect(cfg.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=> console.log("DB 연결 성공"))
.catch(err=> console.log(err))

app.get('/', (req,res) => res.send('@@@@@@@@@@hello world!'))
app.listen(port, ()=> console.log(`listening on port ${port}!`))

app.post('/regUser',(req,res)=>{
    const user = new User(req.body);
    user.save((err, userInfo)=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({success:true});
    })
})