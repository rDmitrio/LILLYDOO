export default {
  namespaced: true,

  state: {
    packId: 0,
    hasSensetiveWipes: false
  },

  mutations: {
    SET_PACK_INFO(state, { val }) {
      state.packId = val.id;
      state.hasSensetiveWipes = val.hasSensetiveWipes;
    }
  },

  actions: {
    setPackInfo({ commit }, val) {
      commit('SET_PACK_INFO', { val });
    }
  },

  getters: {
    getPackInfo: (state) => ({
      id: state.packId,
      hasSensetiveWipes: state.hasSensetiveWipes
    })
  }
};
