import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
// import PageView from '@/layouts/PageView'

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      meta: {
        keepAlive: true,
      },
      component: () => import('@/pages/login')
    },
    {
      path: '*',
      name: '404',
      meta: {
        keepAlive: true,
      },
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/403',
      name: '403',
      meta: {
        keepAlive: true,
      },
      component: () => import('@/pages/exception/403'),
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/login',
      children: [
        {
          path: 'work',
          name: '工作台',
          meta: {
            icon: 'dashboard',
            keepAlive: true,
          },
          component: () => import('@/pages/work')
        },
        {
          path: 'settings',
          name: '设置',
          meta: {
            icon: 'form',
            keepAlive: true,
          },
          component: () => import('@/pages/settings')
        },
        {
          path: 'about',
          name: '关于',
          meta: {
            icon: 'check-circle-o',
            keepAlive: true,
          },
          component: () => import('@/pages/about')
        },
        {
          name: '验权页面',
          path: 'auth/work',
          meta: {
            icon: 'file-ppt',
            authority: {
              permission: 'form',
              role: 'manager'
            },
            component: () => import('@/pages/work')
          }
        }
      ]
    },
    {
      path: '/sub',
      name: '子页',
      component: BlankView,
      meta: {
        keepAlive: true,
      },
      children: [
        {
          name: '预沉池',
          path: '1001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/1000/1001')
        },
        {
          name: '生化预处理',
          path: '1002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/1000/1002')
        },
        {
          name: '化学预处理',
          path: '1003',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/1000/1003')
        },
        {
          name: '活性炭吸附预处理',
          path: '1004',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/1000/1004')
        },
        {
          name: '机械絮凝池',
          path: '2001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/2000/2001')
        },
        {
          name: '网格絮凝池',
          path: '2002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/2000/2002')
        },
        {
          name: '网格絮凝池',
          path: '2003',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/2000/2003')
        },
        {
          name: '网格絮凝池',
          path: '2004',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/2000/2004')
        },
        {
          name: '平流沉淀池',
          path: '3001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/3000/3001')
        },
        {
          name: '斜管（板）沉淀池',
          path: '3002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/3000/3002')
        },
        {
          name: '高效沉淀池',
          path: '3003',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/3000/3003')
        },
        {
          name: '机械搅拌澄清池',
          path: '3004',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/3000/3004')
        },
        {
          name: '水力循环澄清池',
          path: '3005',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/3000/3005')
        },
        {
          name: '普通快滤池',
          path: '4001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/4000/4001')
        },
        {
          name: 'V型滤池',
          path: '4002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/4000/4002')
        },
        {
          name: 'V型滤池',
          path: '4003',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/4000/4003')
        },
        {
          name: 'V型滤池',
          path: '4004',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/4000/4004')
        },
        {
          name: 'V型滤池',
          path: '4005',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/4000/4005')
        },
        {
          name: '接触消毒',
          path: '5001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/5000/5001')
        },
        {
          name: '紫外线消毒',
          path: '5002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/5000/5002')
        },
        {
          name: '臭氧消毒',
          path: '5003',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/5000/5003')
        },
        {
          name: 'PAC',
          path: '6001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/6000/6001')
        },
        {
          name: 'PAM',
          path: '6002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/6000/6002')
        },
        {
          name: 'NaClO',
          path: '6003',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/6000/6003')
        },
        {
          name: 'ClO2',
          path: '6004',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/6000/6004')
        },
        {
          name: '提升泵房',
          path: '7001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/7000/7001')
        },
        {
          name: '清水池',
          path: '7002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/7000/7002')
        },
        {
          name: '排泥水处理',
          path: '7003',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/7000/7003')
        },
      ]
    }
  ]
}

export default options
