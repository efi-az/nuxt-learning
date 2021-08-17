import iziToast from "izitoast"

export default ({ app }, inject) => {

  inject('getMessage', (type, msg) => {
    switch (type.trim()) {
      case 'error': {
        iziToast.error({
          title: 'error',
          message: msg,
        });
      }
      break
      case 'warning': {
        iziToast.warning({
          title: 'warning',
          message: msg,
        });
      }
      break
      case 'success': {
        iziToast.success({
          title: 'success',
          message: msg,
        });
      }
      break
      case 'info': {
        iziToast.info({
          title: 'info',
          message: msg,
        });
      }
    }
  })
}
