const express = require('express')
const router = express.Router()
const path = require('path')
const { check, validationResult } = require('express-validator/check')
const bodyParser = require('body-parser')

// 管理器
const userController = require(path.join(
  __dirname,
  '../controllers/userControllers'
))
// 解析post数据
router.use(bodyParser.urlencoded({ extended: false }))

// 用户登录
router.post(
  '/login',
  [
    // username must be an email
    check('username')
      .isLength({ min: 4 })
      .not()
      .isEmpty(),
    // password must be at least 5 chars long
    check('password')
      .isLength({ min: 6 })
      .not()
      .isEmpty()
  ],
  (req, res,next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (errors.isEmpty()) {
     return next()
    }
    // console.log(errors);
    res.send({
      code:400,
      msg:"用户名或密码格式不对，请检查"
    })
  },
  userController.loginC
)

module.exports = router
