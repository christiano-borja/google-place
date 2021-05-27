import BaseService from '@/network/base-service'

class UserService extends BaseService {
  constructor () {
    super(`${process.env.VUE_APP_API_AUTH_URL}`)
  }

  edit (params) {
    return this.put('users/2', params)
  }

  user (params) {
    return this.get('users/2', params)
  }

}

export default new UserService