import Vue from 'vue'
export default {
  inserted: function (el, binding = {}, vnode) {
    let value = binding.value.value ? binding.value.value : binding.value;
    let config = binding.value.config ? binding.value.config : {} ;
    el.innerText = Vue.prototype.$vCurrency(value, config)
  }
}
