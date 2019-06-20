const fs = require('fs')
const path = require('path')
module.exports = {
  find({username,password}){
    try {
      const users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/user.json'),'utf8'))
      if(!users[username]){
        return false
      }else{
        return users[username]==password
      }
    } catch (error) {
      return false
    }
  }
}