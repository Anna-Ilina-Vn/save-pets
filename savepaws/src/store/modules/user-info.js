import * as types from "../mutations.types";

export const status = {
  FINISH: "FINISH",
  PENDING: "PENDING",
  FAIL: "FAIL",
};

class Model {
  fullName = "";

  phoneNumber = "";

  numberOfAnimals = "";

  description = "";

  isWait = true;

  photos = [];
}

const module = {
  state: {
    userInfo: new Model(),
    requestStatus: status.PENDING,
  },

  getters: {
    userInfo: (state) => state.userInfo,
    requestStatus: (state) => state.requestStatus,
  },

  mutations: {
    [types.UPDATE_USER_INFO](state, model) {
      state.userInfo = model;
    },
    [types.UPDATE_REQUEST_STATUS](state, payload) {
      state.requestStatus = payload;
    },
  },

  actions: {
    updateUserInfo({commit}, payload) {
      commit(types.UPDATE_USER_INFO, {...payload});
    },
    resetUserInfo({commit}) {
      commit(types.UPDATE_USER_INFO, new Model());
    },
    resetStatus({commit}) {
      commit(types.UPDATE_REQUEST_STATUS, status.PENDING);
    },
    submitRequest({dispatch, state, commit}) {
      if (!state.isWait) {
        commit(types.UPDATE_REQUEST_STATUS, status.FINISH);
        dispatch("resetUserInfo");
      }
    },
  },
};

export default module;
