import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "../src/assets/css/base.css";
import { 
  Tabs,
  TabPane,
  Input,
  Table,
  TableColumn,
  Pagination
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
