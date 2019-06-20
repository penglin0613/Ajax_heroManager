const path = require('path')
const userModel = require(path.join(__dirname, '../modal/userModel'))
module.exports = {
  loginC(req, res) {
    const { username, password } = req.body
    let msg = ''
    let code = ''
    if (userModel.find({ username, password })) {
      code = 200
      msg = '登录成功'
    } else {
      code = 400
      msg = '用户名或密码错误'
    }
    res.send({
      msg,

      code
    })
  }
}
