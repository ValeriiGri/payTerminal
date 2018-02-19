import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{
		  path: '/',
		  name: 'home'
		},
		{
		  path: '/:id',
		  name: 'megafon',
		  component: () => import ('./pages/Megafon.vue')
		}
	]
})
