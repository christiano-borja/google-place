import * as types from "./mutation-types"

export default {
  [types.SET_LOADING](state, payload) {
    state.isLocalLoading = payload
  },
  
  [types.COMPONENT_ON](state, payload) {
    state.componentOn = payload
  },

  [types.REGISTER](state, payload) {
    state.register = payload
  },

  [types.LOGIN](state, payload) {
    state.login = payload
  },
  
  [types.LOGOUT](state, payload) {
    state.logout = payload
  },

}