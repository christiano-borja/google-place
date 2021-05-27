import * as types from "./mutation-types"

export default {
  [types.SET_LOADING](state, payload) {
    state.isLocalLoading = payload
  },
  
  [types.SEARCH_PLACES](state, payload) {
    state.searchPlaces = payload
  },

}