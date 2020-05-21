import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../App.vue';
import RouterView from '../components/RouterView.vue';
import { i18n } from '@/main';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:lang',
      component: RouterView,
      beforeEnter(to, from, next) {
        const lang = to.params.lang;
        if (!['vn', 'de'].includes(lang)) { return next('de'); }
        if (i18n.locale !== lang) {
          i18n.locale = lang;
        }
        return next();
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
      ],
    },
    {
      path: '*',
      redirect: '/de',
    },
  ],
});
