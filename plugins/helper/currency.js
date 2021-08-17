/* sample */
// this.$vCurrency(55000000, {
//     symbol: '$',
//     thousandsSeparator: '.',
//     symbolPosition: 'before',
//     symbolSpacing: true,
//     decimal: 2
// })
const currency = {
  install(Vue) {

    function separator(number, status, thousandsSeparator) {
      if (status) {
        if (!number)
          return number
        let parts = number.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
        return parts.join(".");
      } else return number.replace('/' + thousandsSeparator + '/g', '');
    }

    function currency(val, config = {}) {
      let value = val;
      if (val == null) return null;

      let defaultConfig = {
        symbol: config.symbol ? config.symbol : '$',
        thousandsSeparator: config.thousandsSeparator ? config.thousandsSeparator : ',' ,
        symbolPosition: config.symbolPosition ? config.symbolPosition : 'before', // after
        symbolSpacing: config.symbolSpacing ? ' ' : '',
        numberDecimal: config.numberDecimal != undefined ? config.numberDecimal : undefined
      };
      
      if (defaultConfig.numberDecimal != undefined) value = Number(value).toFixed(defaultConfig.numberDecimal)

      if (typeof config == 'string')
        defaultConfig.symbol = config;

      //fanctionSeparator
      value = separator(value, true, defaultConfig.thousandsSeparator);
      //symbolPosition
      if (defaultConfig.symbol)
        value = (defaultConfig.symbolPosition == 'before' ? defaultConfig.symbol + defaultConfig.symbolSpacing : '') + value + (defaultConfig.symbolPosition == 'after' ? defaultConfig.symbolSpacing + defaultConfig.symbol : '');

      return value;
    };

    Vue.prototype.$commas = function (val, commas = false) {
      if (val) {
        let res = val.replace(/,/g, '');
        if (commas)
          return this.addCommas(res)
        else
          return res
      }else return null
    };

    // We call Vue.mixin() here to inject functionality into all components.
    Vue.mixin({
      // Anything added to a mixin will be injected into all components.
      // In this case, the mounted() method runs when the component is added to the DOM.
      methods: {
        addCommas(nStr) {
          if(!nStr)
            return 0

          nStr += '';
          let x = nStr.split('.');
          let x1 = x[0];
          let x2 = x.length > 1 ? '.' + x[1] : '';
          let rgx = /(\d+)(\d{3})/;
          while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
          }
          return x1 + x2;
        },
      }
    });

    Vue.prototype.$vCurrency = currency;
  }
};
export default currency;
