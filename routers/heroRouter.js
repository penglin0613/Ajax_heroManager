const express = require('express')
const router = express.Router()
const path = require('path')
const { check, validationResult } = require('express-validator/check')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')
// 文件接收
const upload = multer({ dest: 'static/imgs' })

// 管理器
const heroController = require(path.join(
  __dirname,
  '../controllers/heroControllers'
))
// 解析post数据
router.use(bodyParser.urlencoded({ extended: false }))

// 获取所有英雄
router.get('/all', heroController.all)
// 根据id获取英雄
router.get(
  '/id',
  [
    // username must be an email
    check('id')
      .not()
      .isEmpty()
  ],
  (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    // console.log(errors);
    res.send({
      code: 400,
      msg: 'id不能为空哦，请检查'
    })
  },
  heroController.id
)

// 新增
router.post(
  '/add',
  upload.single('icon'),
  [
    // username must be an email
    check('name')
      .not()
      .isEmpty(),
    check('skill')
      .not()
      .isEmpty()
  ],
  (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (!req.file) {
      return res.send({
        code: 400,
        msg: '头像是必须的哦'
      })
    }
    if (errors.isEmpty()) {
      return next()
    }
    const { filename } = req.file

    // 删除头像
    try {
      fs.unlinkSync(path.join(__dirname, '../static/imgs', filename))
    } catch (err) {}
    // console.log(errors);
    res.send({
      code: 400,
      msg: 'name，或skill不能为空哦'
    })
  },
  heroController.add
)
// 根据id获取英雄
router.get(
  '/delete',
  [
    // username must be an email
    check('id')
      .not()
      .isEmpty()
  ],
  (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    // console.log(errors);
    res.send({
      code: 400,
      msg: 'id不能为空哦，请检查'
    })
  },
  heroController.delete
)

// 编辑
router.post(
  '/update',
  upload.single('icon'),
  [
    // username must be an email
    check('name')
      .not()
      .isEmpty(),
    check('skill')
      .not()
      .isEmpty(),
    check('id')
      .not()
      .isEmpty()
  ],
  (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (!req.file) {
      return res.send({
        code: 400,
        msg: '头像是必须的哦'
      })
    }
    if (errors.isEmpty()) {
      return next()
    }
    const { filename } = req.file

    // 删除头像
    try {
      fs.unlinkSync(path.join(__dirname, '../static/imgs', filename))
    } catch (err) {}
    // console.log(errors);
    res.send({
      code: 400,
      msg: 'name，或skill或id不能为空哦'
    })
  },
  heroController.update
)

module.exports = router
