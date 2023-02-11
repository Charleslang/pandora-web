import type { RouteRecordRaw, RouteMeta } from 'vue-router'

// 建议加 .vue 后缀，虽然能够通过配置来解决，但是不建议忽略 .vue 的后缀
// @see https://github.com/vitejs/vite/issues/178
// https://www.cxyzjd.com/article/u010281877/116491779
const Layout = () => import('@/components/layout/index.vue')
const Home = () => import('@/pages/Home.vue') 
const Base64 = () => import('@/pages/PandoraBase64.vue')
const URL = () => import('@/pages/PandoraURL.vue')
const Whitespace = () => import('@/pages/PandoraWhitespace.vue')
const Json = () => import('@/pages/PandoraJson.vue')

export const dynamicRoute = [
  { 
    path: '/', 
    name: 'home',
    meta: {
      title: '首页',
      icon: 'HomeOutlined'
    }, 
    component: Home
  },
  {
    path: 'base64',
    meta: {
      title: 'Base64',
      icon: 'KeyOutlined'
    },
    component: Base64
  },
  {
    path: 'url',
    meta: {
      title: 'URL',
      icon: 'LinkOutlined'
    },
    component: URL
  },
  {
    path: 'whitespace',
    meta: {
      title: 'Whitespace',
      icon: 'FontSizeOutlined'
    },
    component: Whitespace
  },
  {
    path: 'json',
    meta: {
      title: 'Json',
      icon: 'FileTextOutlined'
    },
    component: Json
  },
  // { 
  //   path: 'log',
  //   meta: {
  //     title: '日志',
  //     icon: ''
  //   },  
  //   children: [
  //     { 
  //       path: 'shop',
  //       name: 'shop',
  //       meta: {
  //         title: '操作日志',
  //         icon: ''
  //       }, 
  //       component: Shop
  //     },
  //     {
  //       path: 'log1',
  //       meta: {
  //         title: '其他日志',
  //         icon: ''
  //       }, 
  //       children: [
  //         { 
  //           path: 'profile', 
  //           name: 'profile', 
  //           meta: {
  //             title: '访问日志',
  //             icon: ''
  //           }, 
  //           component: Profile 
  //         },
  //       ]
  //     }
  //   ],
  // },
  // {
  //   path: '/s1', 
  //   name: 's1',
  //   meta: {
  //     title: '仪表盘',
  //     icon: ''
  //   }, 
  //   component: Home,
  //   children: [
  //     {
  //       path: '/s11', 
  //       name: 's11',
  //       meta: {
  //         title: '可视化',
  //         icon: ''
  //       },
  //       component: Home,
  //     },
  //     {
  //       path: '/s12', 
  //       name: 's12',
  //       meta: {
  //         title: '实时监控',
  //         icon: ''
  //       },
  //       component: Home,
  //     }
  //   ]
  // },
  // {
  //   path: '/s2', 
  //   name: 's2',
  //   meta: {
  //     title: '列表页',
  //     icon: ''
  //   }, 
  //   component: Home,
  //   children: [
  //     {
  //       path: '/s21', 
  //       name: 's21',
  //       meta: {
  //         title: '可视化',
  //         icon: ''
  //       },
  //       component: Home,
  //     },
  //     {
  //       path: '/s22', 
  //       name: 's22',
  //       meta: {
  //         title: '实时监控',
  //         icon: ''
  //       },
  //       component: Home,
  //     }
  //   ]
  // },
  // {
  //   path: '/s3', 
  //   name: 's3',
  //   meta: {
  //     title: '图标',
  //     icon: ''
  //   }, 
  //   component: Home,
  //   children: [
  //     {
  //       path: '/s31', 
  //       name: 's31',
  //       meta: {
  //         title: '可视化',
  //         icon: ''
  //       },
  //       component: Home,
  //     },
  //     {
  //       path: '/s32', 
  //       name: 's32',
  //       meta: {
  //         title: '实时监控',
  //         icon: ''
  //       },
  //       component: Home,
  //     }
  //   ]
  // },
  // {
  //   path: '/s5', 
  //   name: 's5',
  //   meta: {
  //     title: '个人中心',
  //     icon: ''
  //   }, 
  //   component: Home,
  //   children: [
  //     {
  //       path: '/s51', 
  //       name: 's51',
  //       meta: {
  //         title: '可视化',
  //         icon: ''
  //       },
  //       component: Home,
  //     },
  //     {
  //       path: '/s52', 
  //       name: 's52',
  //       meta: {
  //         title: '实时监控',
  //         icon: ''
  //       },
  //       component: Home,
  //     }
  //   ]
  // },
  // {
  //   path: '/s6', 
  //   name: 's6',
  //   meta: {
  //     title: '表单页',
  //     icon: ''
  //   }, 
  //   component: Home,
  //   children: [
  //     {
  //       path: '/s61', 
  //       name: 's61',
  //       meta: {
  //         title: '可视化',
  //         icon: ''
  //       },
  //       component: Home,
  //     },
  //     {
  //       path: '/s62', 
  //       name: 's62',
  //       meta: {
  //         title: '实时监控',
  //         icon: ''
  //       },
  //       component: Home,
  //     }
  //   ]
  // }
]

export const menuList: Array<RouteRecordRaw> = [
  { 
    path: '/', 
    component: Layout,
    meta: {
      title: 'Layout',
      visible: false
    },
    children: [
      ...dynamicRoute
    ]
  },
  {
    path: '/404',
    meta: {
      title: 'Not Found',
      hidden: true
    },
    component: Layout
  },
  { 
    // path: '*',
    // fix Catch all routes ("*") must now be defined using a param with a custom regexp
    // @see https://blog.csdn.net/qq_42723113/article/details/119846710
    path: '/:pathMatch(.*)*',
    meta: {
      title: 'Not Found',
      hidden: true
    },
    redirect: '/404'
  }
]