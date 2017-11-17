import Vue from 'vue';
import Router from 'vue-router';

import First from '../components/app/index.vue';
import Second from '../components/app/contact.vue';

Vue.use(Router)

export default new Router({
  routes: [
      {
        name: 'first',
        path: '/home',

        component: First,

      },
      {
          name: 'Second',
          path: '/contact',
          component: Second,

      }

  ]
})
