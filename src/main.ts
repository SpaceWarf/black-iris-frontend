import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faClock,
  faChevronRight,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';
import store, { key } from './store';

library.add(
  faClock,
  faChevronRight,
  faChevronDown
);

createApp(App)
  .use(store, key)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
