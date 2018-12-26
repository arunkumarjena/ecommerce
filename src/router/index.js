import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/useraccess/Login'
import SignUp from '@/components/useraccess/SignUp'
import Home from '@/components/home/Home'
import sidebar from '@/components/sidebar/sidebar'

// import Page404 from '@/components/shared/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    
    {
      path: '/home',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: sidebar
    },

  //   {
  //   path: '*', 
  //   component: Page404,
    
  // }
  ],
  mode:'history'
})
