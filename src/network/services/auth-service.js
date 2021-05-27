import AuthBaseService from '@/network/auth-base-service'
const TOKEN_KEY = 'authToken'

class AuthService extends AuthBaseService {
  constructor () {
    super(`${process.env.VUE_APP_API_AUTH_URL}`)
  }

  signIn (params) {
    return this.post('login', params)
  }

  register (params) {
    return this.post('register', params)
  }

  isAuthenticated () {
    return !!localStorage.getItem(TOKEN_KEY)
  }

  logout () {
    localStorage.clear()
  }

  setToken (token) {
    localStorage.setItem(TOKEN_KEY, token)
  }
}

export default new AuthService