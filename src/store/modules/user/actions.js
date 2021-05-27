import * as types from "./mutation-types"
import { messageHelper } from "@/store/helpers/message-helper"
import UserService from '@/network/services/user-service'

export const getUserAction = async ({ commit }, payload) => {
	commit(types.SET_LOADING, true)
	try {
		const response = await UserService.user(payload)
		commit(types.GET_USER, response.data)
	} catch (error) {
    messageHelper.displayError(error.response.data.error);
  } finally {
    commit(types.SET_LOADING, false);
  }
}

export const updateUserAction = async ({ commit }, payload) => {
	commit(types.SET_LOADING, true)
	try {
		const response = await UserService.edit(payload)
		commit(types.UPDATE_USER, response.data)
		messageHelper.displaySuccess("Update done");
	} catch (error) {
    messageHelper.displayError(error.response.data.error);
  } finally {
    commit(types.SET_LOADING, false);
  }
}

