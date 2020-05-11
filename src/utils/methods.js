// Vue 公用方法
export default {
  install(Vue) {
    Vue.prototype.util = {
      method1(value) {
        console.log(value, "111111111");
      },
      method2(value) {
        console.log(value, "2222222222");
      }
    };
  }
};
