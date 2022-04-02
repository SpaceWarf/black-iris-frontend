import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faClock,
  faChevronRight,
  faChevronDown,
  faEye,
  faEyeSlash,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';
import store, { key } from './store';
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('logInUser', {
      firebaseDetails: user,
      role: '',
      group: '',
    });
  } else {
    store.commit('logOutUser');
  }
});

library.add(
  faClock,
  faChevronRight,
  faChevronDown,
  faEye,
  faEyeSlash,
  faUser
);

createApp(App)
  .use(store, key)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
