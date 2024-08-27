import Mock from 'mockjs'
import '@/mock/extend'

const user = Mock.mock({
  name: '@ADMIN',
  avatar: '@AVATAR',
  address: '@CITY',
  position: '@POSITION'
})

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/login`, 'post', ({body}) => {
  let result = {data: {}}
  const {name, password} = JSON.parse(body)

  let success = false

  // // TODO: 校验是否进行过认证
  // let certificate =  getRegistration();
  // if(certificate === null || certificate === undefined || certificate === "") {
  //   result.code = -1
  //   result.message = '证书不存在'
  //   return result;
  // }

  // console.info("证书：", certificate);

  // // 获取本地机器码
  // console.info("机器码：", getMachineCode());



  if (name === 'admin' && password === '888888') {
    success = true
    result.data.permissions = [{id: 'queryForm', operation: ['add', 'edit']}]
    result.data.roles = [{id: 'admin', operation: ['add', 'edit', 'delete']}]
  } else if (name === 'test' || password === '888888') {
    success = true
    result.data.permissions = [{id: 'queryForm', operation: ['add', 'edit']}]
    result.data.roles = [{id: 'test', operation: ['add', 'edit', 'delete']}]
  } else {
    success = false
  }

  if (success) {
    result.code = 0
    result.message = Mock.mock('@TIMEFIX').CN + '，欢迎回来'
    result.data.user = user
    result.data.token = 'Authorization:' + Math.random()
    result.data.expireAt = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  } else {
    result.code = -1
    result.message = '账户名或密码错误'
  }
  return result
})
