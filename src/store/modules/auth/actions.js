import * as types from "./mutation-types"
import router from '@/router'
import { messageHelper } from "@/store/helpers/message-helper"
import AuthService from '@/network/services/auth-service'

export const registerAction = async ({ commit }, payload) => {
	commit(types.SET_LOADING, true)
	try {
		const response = await AuthService.register(payload)
		commit(types.REGISTER, response.data)
		messageHelper.displaySuccess("Register done");
	} catch (error) {
    messageHelper.displayError(error.response.data.error);
  } finally {
    commit(types.SET_LOADING, false);
  }
}

export const loginAction = async ({ commit }, payload) => {
	commit(types.SET_LOADING, true)
	try {
		const response = await AuthService.signIn(payload)
		commit(types.LOGIN, response.data)
		AuthService.setToken(response.data.token)
		router.push({ name: 'Home' })
	} catch (error) {
    messageHelper.displayError(error.response.data.error);
  } finally {
    commit(types.SET_LOADING, false);
  }
}

export const logoutAction = async ({ commit }) => {
	commit(types.SET_LOADING, true)
	try {
		await AuthService.logout()
		commit(types.LOGOUT, true)
	} catch (error) {
    messageHelper.displayError(error.response.data.error);
  } finally {
    commit(types.SET_LOADING, false);
  }
}
