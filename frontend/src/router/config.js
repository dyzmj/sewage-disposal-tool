import TabsView from '@/layouts/tabs/TabsView'
// import BlankView from '@/layouts/BlankView'
import PageView from '@/layouts/PageView'

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
          path: '1000',
          name: '预处理工艺',
          meta: {
            icon: 'table',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '陶粒填料生物接触氧化池',
              path: '/sub/1001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/1000/1001')
            },
            {
              name: '预沉池',
              path: '/sub/1002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/1000/1002')
            },
          ],
        },
        {
          path: '3000',
          name: '混凝工艺',
          meta: {
            icon: 'profile',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '机械搅拌絮凝池',
              path: '/sub/3001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/3000/3001')
            },
            {
              name: '网格絮凝池',
              path: '/sub/3002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/3000/3002')
            },
            {
              name: '折板絮凝池',
              path: '/sub/3003',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/3000/3003')
            },
          ]
        },
        {
          path: '5000',
          name: '沉淀工艺',
          meta: {
            icon: 'appstore-o',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '平流沉淀池',
              path: '/sub/5001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/5000/5001')
            },
            {
              name: '斜管沉淀池',
              path: '/sub/5002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/5000/5002')
            },
            {
              name: '高密度沉淀池',
              path: '/sub/5003',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/5000/5003')
            },
            {
              name: '机械搅拌澄清池',
              path: '/sub/5004',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/5000/5004')
            },
            {
              name: '水力循环澄清池',
              path: '/sub/5005',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/5000/5005')
            },
            {
              name: '平流式气浮池',
              path: '/sub/5006',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/5000/5006')
            },
          ]
        },
        {
          path: '6000',
          name: '过滤工艺',
          meta: {
            icon: 'file-excel',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '普通快滤池',
              path: '/sub/6001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/6000/6001')
            },
            {
              name: 'V型滤池',
              path: '/sub/6001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/6000/6002')
            },
          ]
        },
        {
          path: '8000',
          name: '深度处理工艺',
          meta: {
            icon: 'project',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '臭氧活性炭',
              path: '/sub/8001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/8000/8001')
            },
            {
              name: 'UF-GE',
              path: '/sub/8001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/8000/8002')
            },
          ]
        },
        {
          path: '2000',
          name: '消毒工艺',
          meta: {
            icon: 'warning',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '接触消毒池',
              path: '/sub/2001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/2000/2001')
            },
            {
              name: '浸水式紫外线消毒',
              path: '/sub/2002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/2000/2002')
            },
            {
              name: '臭氧消毒',
              path: '/sub/2002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/2000/2002')
            },
          ]
        },
        {
          path: '4000',
          name: '加药工艺',
          meta: {
            icon: 'info',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '浓缩池',
              path: '/sub/4001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/4000/4001')
            },
            {
              name: '脱水加药',
              path: '/sub/4002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/4000/4002')
            },
          ]
        },
        {
          path: '7000',
          name: '其他工艺',
          meta: {
            icon: 'file',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '提升泵房',
              path: '/sub/7001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/7000/7001')
            },
            {
              name: '清水池',
              path: '/sub/7002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/7000/7002')
            },
            {
              name: '活性炭吸附塔',
              path: '/sub/7003',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/7000/7003')
            },
            {
              name: '加药系统',
              path: '/sub/7004',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/7000/7004')
            },
            {
              name: '折点加氯',
              path: '/sub/7005',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/7000/7005')
            },
          ]
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
      component: TabsView,
      meta: {
        keepAlive: true,
      },
      children: [
        {
          name: '陶粒填料生物接触氧化池',
          path: '1001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/1000/1001')
        },
        {
          name: '预沉池',
          path: '1002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/1000/1002')
        },
        {
          name: '接触消毒池',
          path: '2001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/2000/2001')
        },
        {
          name: '浸水式紫外线消毒',
          path: '2002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/2000/2002')
        },
        {
          name: '臭氧消毒',
          path: '2003',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/2000/2003')
        },
        {
          name: '机械搅拌絮凝池',
          path: '3001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/3000/3001')
        },
        {
          name: '网格絮凝池',
          path: '3002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/3000/3002')
        },
        {
          name: '折板絮凝池',
          path: '3003',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/3000/3003')
        },
        {
          name: '浓缩池',
          path: '4001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/4000/4001')
        },
        {
          name: '脱水加药',
          path: '4002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/4000/4002')
        },
        {
          name: '平流沉淀池',
          path: '5001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/5000/5001')
        },
        {
          name: '斜管沉淀池',
          path: '5002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/5000/5002')
        },
        {
          name: '高密度沉淀池',
          path: '5003',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/5000/5003')
        },
        {
          name: '机械搅拌澄清池',
          path: '5004',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/5000/5004')
        },
        {
          name: '水力循环澄清池',
          path: '5005',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/5000/5005')
        },
        {
          name: '平流式气浮池',
          path: '5006',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/5000/5006')
        },
        {
          name: '普通快滤池',
          path: '6001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/6000/6001')
        },
        {
          name: 'V型滤池',
          path: '6002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/6000/6002')
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
          name: '活性炭吸附塔',
          path: '7003',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/7000/7003')
        },
        {
          name: '活性炭吸附塔',
          path: '7004',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/7000/7004')
        },
        {
          name: '活性炭吸附塔',
          path: '7005',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/7000/7005')
        },
        {
          name: '臭氧活性炭',
          path: '8001',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/8000/8001')
        },
        {
          name: 'UF-GE',
          path: '8002',
          meta: {
            keepAlive: true,
          },
          component: () => import('@/pages/operation/8000/8002')
        },
      ]
    }
  ]
}

export default options
