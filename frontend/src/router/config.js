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
          path: 'flowchart',
          name: '工艺流程图',
          meta: {
            icon: 'picture',
            keepAlive: true,
          },
          component: () => import('@/pages/flowchart')
        },
        {
          path: 'costs',
          name: '运行成本',
          meta: {
            icon: 'dollar',
            keepAlive: true,
          },
          component: () => import('@/pages/costs')
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
              name: '陶粒生物接触氧化池',
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
            {
              name: '加药系统-NaClO',
              path: '/sub/1003',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/1000/1003')
            },
            {
              name: '加药系统-ClO2',
              path: '/sub/1004',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/1000/1004')
            },
            {
              name: '加药系统-高锰酸钾',
              path: '/sub/1005',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/1000/1005')
            },
            {
              name: '臭氧',
              path: '/sub/1006',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/1000/1006')
            },
            {
              name: '加药系统-活性炭粉末',
              path: '/sub/1007',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/1000/1007')
            },
          ],
        },
        {
          path: '2000',
          name: '混凝工艺',
          meta: {
            icon: 'profile',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '机械搅拌絮凝池',
              path: '/sub/2001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/2000/2001')
            },
            {
              name: '网格絮凝池',
              path: '/sub/2002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/2000/2002')
            },
            {
              name: '折板絮凝池',
              path: '/sub/2003',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/2000/2003')
            },
            {
              name: '加药系统-PAC',
              path: '/sub/2004',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/2000/2004')
            },
            {
              name: '加药系统-PAM',
              path: '/sub/2005',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/2000/2005')
            },
          ]
        },
        {
          path: '3000',
          name: '沉淀工艺',
          meta: {
            icon: 'appstore-o',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '平流沉淀池',
              path: '/sub/3001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/3000/3001')
            },
            {
              name: '斜管沉淀池',
              path: '/sub/3002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/3000/3002')
            },
            {
              name: '高密度沉淀池',
              path: '/sub/3003',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/3000/3003')
            },
            {
              name: '机械搅拌澄清池',
              path: '/sub/3004',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/3000/3004')
            },
            {
              name: '水力循环澄清池',
              path: '/sub/3005',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/3000/3005')
            },
            {
              name: '平流式气浮池',
              path: '/sub/3006',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/3000/3006')
            },
          ]
        },
        {
          path: '4000',
          name: '过滤工艺',
          meta: {
            icon: 'filter',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '普通快滤池',
              path: '/sub/4001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/4000/4001')
            },
            {
              name: 'V型滤池',
              path: '/sub/4002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/4000/4002')
            },
          ]
        },
        {
          path: '5000',
          name: '深度处理工艺',
          meta: {
            icon: 'project',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '臭氧活性炭',
              path: '/sub/5001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/5000/5001')
            },
            {
              name: 'UF-GE',
              path: '/sub/5002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/5000/5002')
            },
          ]
        },
        {
          path: '6000',
          name: '消毒工艺',
          meta: {
            icon: 'contacts',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '接触消毒池',
              path: '/sub/6001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/6000/6001')
            },
            {
              name: '浸水式紫外线消毒',
              path: '/sub/6002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/6000/6002')
            },
            {
              name: '臭氧消毒',
              path: '/sub/6003',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/6000/6003')
            },
            {
              name: '折点加氯',
              path: '/sub/6004',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/6000/6004')
            },
            {
              name: '加药系统-NaClO',
              path: '/sub/6005',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/6000/6005')
            },
            {
              name: '加药系统-ClO2',
              path: '/sub/6006',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/6000/6006')
            },
          ]
        },
        // {
        //   path: '7000',
        //   name: '加药工艺',
        //   meta: {
        //     icon: 'block',
        //     keepAlive: true,
        //   },
        //   component: PageView,
        //   children: [
        //     {
        //       name: '活性炭吸附塔',
        //       path: '/sub/7001',
        //       meta: {
        //         keepAlive: true,
        //       },
        //       component: () => import('@/pages/operation/7000/7001')
        //     },
        //     {
        //       name: '折点加氯',
        //       path: '/sub/7002',
        //       meta: {
        //         keepAlive: true,
        //       },
        //       component: () => import('@/pages/operation/7000/7002')
        //     },
        //     {
        //       name: 'NaClO',
        //       path: '/sub/7003',
        //       meta: {
        //         keepAlive: true,
        //       },
        //       component: () => import('@/pages/operation/7000/7003')
        //     },
        //     {
        //       name: 'ClO2',
        //       path: '/sub/7004',
        //       meta: {
        //         keepAlive: true,
        //       },
        //       component: () => import('@/pages/operation/7000/7004')
        //     },
        //     {
        //       name: 'PAC',
        //       path: '/sub/7005',
        //       meta: {
        //         keepAlive: true,
        //       },
        //       component: () => import('@/pages/operation/7000/7005')
        //     },
        //     {
        //       name: 'PAM',
        //       path: '/sub/7006',
        //       meta: {
        //         keepAlive: true,
        //       },
        //       component: () => import('@/pages/operation/7000/7006')
        //     },
        //     {
        //       name: '活性炭粉末',
        //       path: '/sub/7007',
        //       meta: {
        //         keepAlive: true,
        //       },
        //       component: () => import('@/pages/operation/7000/7007')
        //     },
        //     {
        //       name: '高锰酸钾',
        //       path: '/sub/7008',
        //       meta: {
        //         keepAlive: true,
        //       },
        //       component: () => import('@/pages/operation/7000/7008')
        //     },
        //   ]
        // },
        {
          path: '8000',
          name: '其他工艺',
          meta: {
            icon: 'experiment',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '提升泵房',
              path: '/sub/8001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/8000/8001')
            },
            {
              name: '清水池',
              path: '/sub/8002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/8000/8002')
            },
            
          ]
        },
        {
          path: '9000',
          name: '污泥脱水工艺',
          meta: {
            icon: 'build',
            keepAlive: true,
          },
          component: PageView,
          children: [
            {
              name: '浓缩池',
              path: '/sub/9001',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/9000/9001')
            },
            {
              name: '脱水加药',
              path: '/sub/9002',
              meta: {
                keepAlive: true,
              },
              component: () => import('@/pages/operation/9000/9002')
            },
          ]
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
          path: 'auth',
          name: '授权',
          meta: {
            icon: 'safety',
            keepAlive: true,
          },
          component: () => import('@/pages/auth')
        },
        {
          name: '验权页面',
          path: 'auth/work',
          meta: {
            icon: 'safety',
            authority: {
              permission: 'form',
              role: 'manager'
            },
            component: () => import('@/pages/work')
          }
        },
      ]
    },
  ]
}

export default options
