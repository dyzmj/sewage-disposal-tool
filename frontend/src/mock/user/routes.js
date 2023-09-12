import Mock from 'mockjs'

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/routes`, 'get', () => {
  let result = {}
  result.code = 0
  result.data = [{
    router: 'root',
    children: ['work',
      {
        router: 'parent1',
        children: [{
          router: 'work',
          name: 'work1',
          authority: {
            permission: 'work',
            role: 'admin'
          }
        }],
      },
      {
        router: 'parent2',
        children: [{
          router: 'work',
          name: 'work2'
        }],
      },
      {
        router: 'exception',
        children: ['exp404', 'exp403', 'exp500'],
      },
      {
        router: 'work',
        icon: 'file-ppt',
        path: 'auth/work',
        name: '验权页面',
        authority: {
          permission: 'form',
          role: 'manager'
        }
      }
    ]
  }]
  return result
})
