# HeroManager

## 支持的请求方法

- GET：从服务器取出资源（一项或多项）。
- POST：在服务器新建一个资源。

  

## 通用返回状态说明

| _状态码_ | _含义_                | _说明_                                              |
| -------- | --------------------- | --------------------------------------------------- |
| 200      | OK                    | 请求成功                                            |
| 201      | CREATED               | 创建成功                                            |
| 202      | UPDATE                | 修改成功                                            |
| 204      | DELETED               | 删除成功                                            |
| 400      | BAD REQUEST           | 请求的地址不存在或者包含不支持的参数                |
| 401      | UNAUTHORIZED          | 未授权                                              |
| 403      | FORBIDDEN             | 被禁止访问                                          |
| 404      | NOT FOUND             | 请求的资源不存在                                    |
| 422      | Unprocesable entity   | [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误 |
| 500      | INTERNAL SERVER ERROR | 内部错误                                            |

## 接口基础地址

http://localhost:4399

## 用户

### 用户登录

> 验证用户名是否可用

- 请求地址：http://localhost:4399/user/login
- 请求方法：post
- 请求参数：

| 参数名   | 参数说明      | 备注       |
| :------- | :------------ | :--------- |
| username | 用户名(admin) | 不能为空,  |
| password | 密码(123456)  | 不能为空， |

- 响应内容：该用户名是否可用

```json
{
  "code": 400,
  "msg": "用户名或密码格式不对，请检查"
}
```



## 英雄

### 所有英雄

> 获取所有英雄

- 请求地址：http://localhost:4399/hero/all
- 请求方法：get
- 请求参数：无

- 响应内容：所有的英雄

```json
{
  "code": 200,
  "msg": "数据获取成功",
  "data": [
    {
      "id": 1,
      "icon": "https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/4ec2d5628535e5dda58eae977ec6a7efcf1b62d3.jpg",
      "name": "亚索",
      "skill": "风一样的男子"
    },
    {
      "id": 2,
      "icon": "https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/b21bb051f81986189a5285244bed2e738bd4e67d.jpg",
      "name": "提莫",
      "skill": "种蘑菇"
    }
  ]
}
```



### 根据id获取英雄

> 根据id获取英雄

- 请求地址：http://localhost:4399/hero/id
- 请求方法：get
- 请求参数：id

- 响应内容：查询的结果

```json
{
  "code": 200,
  "msg": "获取成功",
  "data": {
    "id": 1,
    "icon": "https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/4ec2d5628535e5dda58eae977ec6a7efcf1b62d3.jpg",
    "name": "亚索",
    "skill": "风一样的男子"
  }
}
```



### 英雄新增

> 英雄新增

- 请求地址：http://localhost:4399/hero/add
- 请求方法：post 
- 请求参数：icon,name,skill  （通过FormData的方式传递）

| 参数名 | 参数说明 | 备注      |
| :----- | :------- | :-------- |
| icon   | 头像     | 不能为空, |
| name   | 名字     | 不能为空  |
| skill  | 技能     | 不能为空  |

- 响应内容：新增的结果

```json
{
  "code": 201,
  "msg": "新增成功"
}
```



### 英雄删除

> 英雄新增

- 请求地址：http://localhost:4399/hero/delete
- 请求方法：get
- 请求参数：id

| 参数名 | 参数说明 | 备注      |
| ------ | -------- | --------- |
| id   | id    | 不能为空, |

- 响应内容：删除的结果

### 英雄编辑

> 英雄新增

- 请求地址：http://localhost:4399/hero/update
- 请求方法：post 
- 请求参数：icon,name,skill,id  （通过FormData的方式传递）

| 参数名 | 参数说明 | 备注      |
| ------ | -------- | --------- |
| icon   | 头像     | 不能为空, |
| name   | 名字     | 不能为空  |
| skill  | 技能     | 不能为空  |
| id  | id     | 不能为空  |

- 响应内容：编辑的结果


```json
{
  "code": 202,
  "msg": "修改成功"
}
```