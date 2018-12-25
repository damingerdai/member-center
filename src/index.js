import Vue from 'vue';
import { Popup, DatetimePicker, Area } from 'vant';

import App from './App.vue';

import './styles.scss';
import 'vant/lib/popup/style';
import 'vant/lib/datetime-picker/style';
import 'vant/lib/area/style';

Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(Area);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, Popup }
})