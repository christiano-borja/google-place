import * as types from "./mutation-types";
import PlaceService from '@/network/services/place-service';
import { messageHelper } from "@/store/helpers/message-helper";

export const searchPlaces = async ({ commit }, params) => {
	commit(types.SET_LOADING, true)
	try {
		const response = await PlaceService.getPlaces(params)
		commit(types.SEARCH_PLACES, response.data)
	} catch (error) {
		messageHelper.displayError("An unexpected error has occurred.")
	} finally {
		commit(types.SET_LOADING, false)
	}
}
