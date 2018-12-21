import Vue from 'vue';
import { Popup,DatetimePicker } from 'vant';
import App from './App.vue';

import './styles.css';
import 'vant/lib/popup/style';
import 'vant/lib/datetime-picker/style';


Vue.use(Popup);
Vue.use(DatetimePicker);
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, Popup }
})