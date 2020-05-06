import Vue from 'vue';
import Vuex from 'vuex';
import pack from '@/store/modules/pack';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pack
  }
});
