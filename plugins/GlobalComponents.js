import Vue from 'vue'

import coin from '~/components/coin'

const GlobalComponents = {
  install(Vue) {
    Vue.component('b-coin', coin);
  }
};
Vue.use(GlobalComponents);

export default GlobalComponents;







