const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');

const config = require('./config/key');

const {User} = require("./models/User");

//application/x-www-form-urlencoded 이렇게 된 데이터를 분석할 수 잇게 하는 것
app.use(bodyParser.urlencoded({extended: true}));

//application/json 에서 가져온 데이터를 분석할 수 있게 해줌.
app.use(bodyParser.json())

const mongoose = require('mongoose')
  mongoose.connect(config.mongoURI
)

app.get('/', (req, res) => {
  res.send('Hello World!안녕하세요 ~ ')
})


app.post('/register', async (req,res)=>{
  //회원 가입할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다.
  
  const user = new User(req.body)

  await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({
        success: false,
        err: err,
      });
    });
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})