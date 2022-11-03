import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Cloudinary, { CldImage } from 'cloudinary-vue';

Vue.config.productionTip = false;

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "dtrcg7rwu",
    secure: true,
  },
  components: { CldImage },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
