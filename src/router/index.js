import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: import.meta.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'landing',
			component: () => import('../components/Landing.vue'),
		},
		{
			path: '/inicio',
			component: () => import('../components/Home.vue'),
			children: [
				{
					path: '/inicio',
					name: 'inicio',
					component: () => import('../components/Inicio.vue'),
				},
				{
					path: '/inicio/registrar',
					name: 'register',
					component: () => import('../components/Form.vue'),
				},
				{
					path: '/inicio/consultar',
					name: 'carsTable',
					component: () => import('../components/CarsTable.vue'),
				},
			],
		},
	],
});

export default router;
