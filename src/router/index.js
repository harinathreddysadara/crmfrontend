import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Landingpage from '../Views/LandingPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LandingPage.vue')

  },
  {
    path: '/marketingLogin',
      component: () => import('../views/children/agents/LoginMarketing.vue')

    },
    {
      path: '/supportLogin',
        component: () => import('../views/children/agents/LoginSupport.vue')
  
     },


     {
      path: '/landingMarketing',
      name: 'login',
      // component: Home,
      component: () => import('../views/LandingMarketing.vue'),
      children: [
        {
          path: '/landingMarketing',
          name: 'opt',
          component: () => import('../views/children/agents/MarketingAgent.vue')
  
        },
         
        {
          path: '/history',
          component: () => import('../views/children/agents/history.vue')
  
        },
        {
          path: '/ticketdetails',
          component: () => import('../views/children/agents/ticketdetails.vue')
  
        },
    //     {
    //       path:'/ticketdetails',
    //       component:() => import('../views/children/ticketdetails.vue')
    //     }
        
      
      ]
    },
   






    {
      path: '/landingSupport',
      name: 'login',
      // component: Home,
      component: () => import('../views/LandingSupport.vue'),
      children: [
        {
          path: '/landingsupport',
          name: 'opt',
          component: () => import('../views/children/agents/SupportAgent.vue')
  
        },
         
        {
          path: '/historySupport',
          component: () => import('../views/children/agents/TicketHistory.vue')
  
        },
        {
          path: '/ticketSupport',
          component: () => import('../views/children/agents/TicketSupportAgent.vue')
  
        },
    //     {
    //       path:'/ticketdetails',
    //       component:() => import('../views/children/ticketdetails.vue')
    //     }
        
      
      ]
    },
     





  {
    path: '/home',
    name: 'login',
    // component: Home,
    component: () => import('../views/Home.vue'),

    children: [
      {
        path: '/home',
        name: 'opt',
        component: () => import('../views/children/Dashboard.vue')

      },
      {
        path: '/Dashboard',
        component: () => import('../views/children/Dashboard.vue')

      },
      {
        path: '/Leads',
        component: () => import('../views/children/Leads.vue')

      },
      {
        path: '/SupportAgent',
        component: () => import('../views/children/SupportAgent.vue')

      },

      {
        path: '/MarketingAgent',
        component: () => import('../views/children/MarketingAgent.vue')

      },
      {
        path: '/ActiveAgent',
        component: () => import('../views/children/ActiveAgent.vue')

      },
      {
        path: '/Tickets',
        component: () => import('../views/children/Tickets.vue')

      },
      {
        path: '/Agents',
        component: () => import('../views/children/Agents.vue')

      },
      {
        path: '/ServiceTickets',
        component: () => import('../views/children/ServiceTickets.vue')

      },
      {
        path: '/MarketingLeads',
        component: () => import('../views/children/MarketingLeads.vue')

      },
      {
        path: '/openLeads',
        component: () => import('../views/children/OpenLeads.vue')

      },
      {
        path: '/openTickets',
        component: () => import('../views/children/OpenTickets.vue')

      },
      {
        path: '/addAgent',
        component: () => import('../views/children/AddAgent.vue')

      },
      {
      path: '/agentRole',
        component: () => import('../views/children/AgentRole.vue')

      },
      
    
    ]
  },
  
  
]

const router = new VueRouter({
  routes,
  hashbang: false,
  mode: 'history'
})

export default router
