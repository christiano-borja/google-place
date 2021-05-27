import _ from 'lodash'
import http from '@/plugins/http2'

class BaseService {
  constructor (resource) {
    this.http = http
    this.resource = resource
  }

  get (params, config) {
    let request = this.resource
    let options

    if (typeof params === 'string' || typeof params === 'number') {
      // Ex. GET /resource/featured
      request = `${this.resource}/${params}`
      options = config
    } else if (!params) {
      options = config
    } else {
      // Ex. GET /resource?featured=1&active=1
      options = { params }
    }

    return http.get(request, options)
  }

  patch (body, route) {
    let resource = this.resource

    if (_.isEmpty(route) === false) {
      resource = `${this.resource}/${route}`
    }

    return http.patch(resource, body)
  }

  post (route, body, config) {
    let resource = this.resource

    if (_.isEmpty(route) === false) {
      resource = `${this.resource}/${route}`
    }

    if (
      config &&
      config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
      const qs = require('querystring')
      body = qs.stringify(body)
    }

    return http.post(resource, body, config)
  }

  put (route, body) {
    let resource = this.resource

    if (_.isEmpty(route) === false) {
      resource = `${this.resource}/${route}`
    }

    return http.put(resource, body)
  }

  delete (params) {
    let request = this.resource
    let options

    if (typeof params === 'string') {
      // Ex. DELETE /resource/featured
      request = `${this.resource}/${params}`
    } else {
      // Ex. DELETE /resource?featured=1&active=1
      options = { params }
    }

    return http.delete(request, options)
  }
}

export default BaseService
