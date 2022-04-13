import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//连续点击多次路由报错解决方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes: [
    {
      path: '/help',
      name: 'help',
      component: () => import('@/views/Help.vue'),
      meta: {
        title: '帮助手册',
        active: 'help'
      }
    },
    {
      path: '/article/:articleType/:articleId?',
      name: 'article',
      component: () => import('@/views/Article.vue'),
      meta: {
        title: '内容',
        active: 'article'
      },
      props: true
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('@/views/Service.vue'),
      meta: {
        title: '在线客服',
        active: 'service'
      }
    },
    {
      path: '/line',
      name: 'line',
      component: () => import('@/views/Line.vue'),
      meta: {
        title: '切换线路',
        active: 'line'
      }
    },
    {
      path: '/language',
      name: 'language',
      component: () => import('@/views/Language.vue'),
      meta: {
        title: '切换语言',
        active: 'language'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: '用户登录',
        active: 'login'
      }
    },
    {
      path: '/register/:recommendId?',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        title: '用户注册',
        active: 'register'
      },
      props: true
    },
    {
      path: '/registeremail/:recommendId?',
      name: 'register',
      component: () => import('@/views/Registeremail.vue'),
      meta: {
        title: '邮箱注册',
        active: 'register'
      },
      props: true
    },
    {
      path: '/',
      name: 'home',
      component:  () => import('@/views/Home.vue'),
      meta: {
        title: '首页',
        active: 'home'
      }
    },
    {
      path: '/task/:tabsActive?',
      name: 'task',
      component: () => import('@/views/task/index.vue'),
      meta: {
        title: '任务',
        active: 'task'
      },
      props: true
    },
    {
      path: '/taskList/:taskType/:taskGrade',
      name: 'taskList',
      component: () => import('@/views/task/list.vue'),
      meta: {
        title: '任务列表',
        active: 'task'
      },
      props: true
    },
    {
      path: '/taskShow/:taskId',
      name: 'taskShow',
      component: () => import('@/views/task/show.vue'),
      meta: {
        title: '任务详情',
        active: 'task'
      },
      props: true
    },
    {
      path: '/vip',
      name: 'vip',
      component: () => import('@/views/Vip.vue'),
      meta: {
        title: 'VIP',
        active: 'vip'
      }
    },
    {
      path: '/profit',
      name: 'profit',
      component: () => import('@/views/Profit.vue'),
      meta: {
        title: '收益',
        active: 'profit'
      }
    },
    {
      path: '/myTask/:taskState?',
      name: 'myTask',
      component: () => import('@/views/MyTask.vue'),
      meta: {
        title: '我的任务',
        requiresAuth: true,
        active: 'myTask'
      },
      props: true
    },
    {
      path: '/appDown',
      name: 'appDown',
      component: () => import('@/views/AppDown.vue'),
      meta: {
        title: 'APP下载',
        active: 'appDown'
      }
    },
    {
      path: '/user',
      name: '',
      component: () => import('@/views/UserCenter.vue'),
      meta: {
        requiresAuth: true,
        title: '会员中心',
        active: 'user'
      },
      children: [
        {
          path: '',
          name: 'user',
          component: () => import('@/views/user/index.vue'),
          meta: {
            title: '会员中心',
            active: 'user'
          }
        },
        {
          path: 'info',
          name: 'info',
          component: () => import('@/views/user/info.vue'),
          meta: {
            title: '个人信息',
            active: 'user'
          }
        },
        {
          path: 'set/:setType',
          name: 'set',
          component: () => import('@/views/user/set.vue'),
          meta: {
            title: '用户设置',
            active: 'user'
          },
          props: true
        },
        {
          path: 'postTask/:taskId?',
          name: 'postTask',
          component: () => import('@/views/user/postTask.vue'),
          meta: {
            title: '发布任务'
          },
          props: true
        },
        {
          path: 'postRecord/:taskType?',
          name: 'postRecord',
          component: () => import('@/views/user/postRecord.vue'),
          meta: {
            title: '发布管理',
          },
          props: true
        },
        {
          path: 'taskRecord/:taskState?',
          name: 'taskRecord',
          component: () => import('@/views/user/taskRecord.vue'),
          meta: {
            title: '任务记录',
          },
          props: true
        },
        {
          path: 'taskInfo/:taskId',
          name: 'taskInfo',
          component: () => import('@/views/user/taskInfo.vue'),
          meta: {
            title: '任务详情',
          },
          props: true
        },
        {
          path: 'auditRecord/:taskState?',
          name: 'auditRecord',
          component: () => import('@/views/user/auditRecord.vue'),
          meta: {
            title: '审核任务',
          },
          props: true
        },
        {
          path: 'auditInfo/:auditId',
          name: 'auditInfo',
          component: () => import('@/views/user/auditInfo.vue'),
          meta: {
            title: '审核详情',
          },
          props: true
        },
        {
          path: 'dayReport',
          name: 'dayReport',
          component: () => import('@/views/user/dayReport.vue'),
          meta: {
            title: '日结报表',
            active: 'user'
          }
        },
        {
          path: 'teamReport',
          name: 'teamReport',
          component: () => import('@/views/user/teamReport.vue'),
          meta: {
            title: '团队报表',
            active: 'user'
          }
        },
        {
          path: 'fundRecord/:fundState?',
          name: 'fundRecord',
          component: () => import('@/views/user/fundRecord.vue'),
          meta: {
            title: '账变记录',
            active: 'user'
          },
          props: true
        },
        {
          path: 'bankCard',
          name: 'bankCard',
          component: () => import('@/views/user/bankCard.vue'),
          meta: {
            title: '我的银行卡',
            active: 'user'
          }
        },
        {
          path: 'wallet/:walletType?',
          name: 'wallet',
          component: () => import('@/views/user/wallet.vue'),
          meta: {
            title: '我的钱包',
            active: 'user'
          },
          props: true
        },
        {
          path: 'recharge/:rechargeId?',
          name: 'recharge',
          component: () => import('@/views/user/recharge.vue'),
          meta: {
            title: '我要充值',
            active: 'user'
          },
          props: true
        },
		{
		  path: 'recharge2/:rechargeId?',
		  name: 'recharge2',
		  component: () => import('@/views/user/recharge2.vue'),
		  meta: {
		    title: '我要充值',
		    active: 'user'
		  },
		  props: true
		},
        {
          path: 'promote',
          name: 'promote',
          component: () => import('@/views/user/promote.vue'),
          meta: {
            title: '我的推广',
            active: 'user'
          }
        },
        {
          path: 'bindAccount',
          name: 'bindAccount',
          component: () => import('@/views/user/bindAccount.vue'),
          meta: {
            title: '绑定账号',
            active: 'user'
          }
        },
        {
          path: 'credit',
          name: 'credit',
          component: () => import('@/views/user/credit.vue'),
          meta: {
            title: '信用中心',
            active: 'user'
          }
        },
        {
          path: 'robot',
          name: 'robot',
          component: () => import('@/views/user/robot.vue'),
          meta: {
            title: '云管家',
            active: 'user'
          }
        },
        {
          path: 'newLc',
          name: 'newLc',
          component: () => import('@/views/user/newLc.vue'),
          meta: {
            title: '余额理财',
            active: 'user'
          }
        },
        {
          path: 'newlist',
          name: 'newlist',
          component: () => import('@/views/user/newlist.vue'),
          meta: {
            title: 'History',
            active: 'user'
          }
        },
      ]
    },
    {
      path: '/404',
      name:'404'
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/miliao',
      name: '',
      component: () => import('@/views/miliao/App'),
      meta: {
        title: '密聊',
        active: 'miliao'
      },
      children: [
        {
          path: '',
          name: 'miliao',
          component: () => import('@/views/miliao/Home'),
          meta: {
            requiresAuth: true,
            active: 'miliao'
          }
        },
        {
          path: 'scan',
          name: 'scan',
          component: () => import('@/views/miliao/Scan'),
          meta: {
            active: 'miliao'
          }
        },
        {
          path: 'friendNotice',
          name: 'friendNotice',
          component: () => import('@/views/miliao/Friend/FriendNotice'),
          meta: {
            requiresAuth: true,
            active: 'miliao'
          }
        },
        {
          path: 'addFG',
          name: 'addFG',
          component: () => import('@/views/miliao/AddFG'),
          meta: {
            requiresAuth: true,
            active: 'miliao'
          }
        },
        {
          path: 'groupNotice',
          name: 'groupNotice',
          component: () => import('@/views/miliao/Group/GroupNotice'),
          meta: {
            requiresAuth: true,
            active: 'miliao'
          }
        },
        {
          path: 'friendInfo',
          name: 'friendInfo',
          component: () => import('@/views/miliao/Friend/FriendInfo'),
          meta: {
            requiresAuth: true,
            active: 'miliao'
          }
        },
        {
          path: 'groupInfo',
          name: 'groupInfo',
          component: () => import('@/views/miliao/Group/GroupInfo'),
          meta: {
            requiresAuth: true,
            active: 'miliao'
          }
        },
        {
          path: 'userInfo',
          name: 'userInfo',
          component: () => import('@/views/miliao/User/UserInfo'),
          meta: {
            requiresAuth: true,
            active: 'miliao'
          }
        },
        {
          path: 'userSetting',
          name: 'userSetting',
          component: () => import('@/views/miliao/User/UserSetting'),
          meta: {
            requiresAuth: true,
            active: 'miliao'
          }
        },
        {
          path: 'sendMsg',
          name: 'sendMsg',
          component: () => import('@/views/miliao/SendMsg'),
          meta: {
            active: 'miliao'
          }
        },
        {
          path: 'friendChatSet',
          name: 'friendChatSet',
          component: () => import('@/views/miliao/Chat/FriendChatSet'),
          meta: {
            requiresAuth: true,
            active: 'miliao'
          }
        },
        {
          path: 'groupChatSet',
          name: 'groupChatSet',
          component: () => import('@/views/miliao/Chat/GroupChatSet'),
          meta: {
            requiresAuth: true,
            active: 'miliao'
          }
        },
        {
          path: 'setInfo/:setType',
          name: 'setInfo',
          component: () => import('@/views/miliao/User/SetInfo'),
          meta: {
            requiresAuth: true,
            active: 'miliao'
          },
          props: true
        },
      ]

    }
  ]
})

export default router
