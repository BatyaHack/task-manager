export default {
  install(Vue, options) {

    Vue.prototype._throtlingFlag = '';

    Vue.prototype.$throtling = function (func, time) {
      clearTimeout(this._throtlingFlag);
      this._throtlingFlag = setTimeout(() => func(), 1000);
    };

    Vue.prototype.$checkInput = function (value) {
      let reg = /^[а-яА-ЯёЁa-zA-Z0-9!?.,$ ]+$/;
      return reg.test(String(value));
    }
  }
}
