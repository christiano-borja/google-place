import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import LogPage from '@/views/LogPage.vue'
import UpdateUser from '@/views/UpdateUser'
import AuthService from '@/network/services/auth-service'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'LogPage',
		component: LogPage
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
      requiresAuth: true
    }
	},
	{
		path: '/update-user',
		name: 'UpdateUser',
		component: UpdateUser,
		meta: {
      requiresAuth: true
    }
	},
  { path: '*', 
    redirect: '/' 
  }
]

const router = new VueRouter({
	mode: "history",
	routes,
});

router.beforeEach((to, from, next) => {
	const { requiresAuth } = to.meta
	if(requiresAuth){
		if (to.meta.requiresAuth && AuthService.isAuthenticated()) {
			return next()
		} else {
			return next({ name: 'LogPage' })
		}
	}

	next()
})
  
export default router
  