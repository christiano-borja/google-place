import BaseService from '@/network/base-service'
const baseURL = process.env.VUE_APP_API_BASE_URL
class PlaceService extends BaseService {
  constructor () {
    super(`${baseURL}`)
  }

  getPlaces(param) {
    return this.get(`json?location=${param.lat},${param.lng}&name=${param.name}&radius=3000&key=${process.env.VUE_APP_API_KEY}`)
  }

}

export default new PlaceService