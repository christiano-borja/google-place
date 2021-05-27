import * as types from "./mutation-types"

export default {
  [types.SET_LOADING](state, payload) {
    state.isLocalLoading = payload
  },

  [types.GET_USER](state, payload) {
    state.user = payload
  },

  [types.UPDATE_USER](state, payload) {
    state.user = payload
  }
  
}