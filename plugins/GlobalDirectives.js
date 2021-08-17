import Vue from 'vue'

import { currency } from '~/directives'

const GlobalDirectives = {
  install (Vue) {
    Vue.directive('currency', currency);
  }
};

Vue.use(GlobalDirectives);
export default GlobalDirectives
