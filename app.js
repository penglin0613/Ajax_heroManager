const express = require('express')
const path = require('path')
const cors = require('cors')
// 路由
const userRouter = require(path.join(__dirname,'./routers/userRouter'))
const heroRouter = require(path.join(__dirname,'./routers/heroRouter'))

const app = express()

// 注册路由
app.use(cors())
app.use('/user',userRouter)
app.use('/hero',heroRouter)
app.use(express.static('static'))

app.listen(4399,()=>{
  console.log('success');
})