import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from "./firebaseConf"
import i18n from './i18n'
import * as ModalDialogs from 'vue-modal-dialogs'
import VuexActionTracker from "vuex-action-tracker";

Vue.config.productionTip = false

import login from './components/login'
import areYouSure from './components/areYouSure'

const dialogLogin = ModalDialogs.create({component: login, wrapper: 'login', props : ['content']})
const dialogAreYouSure = ModalDialogs.create({component: areYouSure,wrapper: 'areYouSure', props : ['content']})

Vue.prototype.$dialogLogin = dialogLogin
Vue.prototype.$areYouSure = dialogAreYouSure

Vue.use(ModalDialogs) 
Vue.use(new VuexActionTracker(), store);


new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
