const path = require('path')
const fs = require('fs')
const heroModel = require(path.join(__dirname, '../modal/heroModel'))
// 基地址
const baseURL = 'http://localhost:4399/imgs/'
module.exports = {
  all(req, res) {
    const heros = heroModel.all()
    if (heros) {
      return res.send({
        code: 200,
        msg: '数据获取成功',
        data: heros
      })
    }
    res.send({
      code: 400,
      msg: '获取失败，请重试'
    })
  },
  id(req, res) {
    // res.send('id')
    const data = heroModel.id({ id: req.query.id })
    if (data) {
      return res.send({
        code: 200,
        msg: '获取成功',
        data
      })
    }
    res.send({
      code: 400,
      code: '获取失败'
    })
  },
  add(req, res) {
    // res.send('/add')
    // 获取信息
    const { skill, name } = req.body
    const { filename } = req.file
    const icon = baseURL + filename
    if (
      heroModel.add({
        skill,
        name,
        icon
      })
    ) {
      return res.send({
        code: 201,
        msg: '新增成功'
      })
    }
    res.send({
      code: 400,
      msg: '新增失败,请检查'
    })
  },
  delete(req, res) {
    // res.send("/delete")
    if (heroModel.delete({ id: req.query.id })) {
      return res.send({
        code: 204,
        msg: '删除成功'
      })
    }
    res.send({
      code: 400,
      msg: '删除失败'
    })
  },
  update(req, res) {
    // res.send('update')
    const {skill,name,id}=req.body
    const {filename} = req.file
    const icon = baseURL+filename

    console.log(icon);

    if(heroModel.update({
      id,name,skill,icon
    })){
      return res.send({
        code:202,
        msg:'修改成功'
      })
    }
    try {
      fs.unlinkSync(
        path.join(
          __dirname,
          '../static/imgs/',
         filename
        )
      )
    } catch (error) {}
    res.send({
      code:400,
      msg:'修改失败'
    })
  }
}
