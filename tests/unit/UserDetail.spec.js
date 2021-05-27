import Vuex from 'vuex'
import Buefy from 'buefy'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import UserDetail from '@/components/user/UserDetail'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(VueRouter)
const router = new VueRouter();

describe('UserDetail.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(UserDetail, {
      localVue,
      router,
      store: new Vuex.Store({
        modules: {
          user: {
            namespaced: true,
            state: {
              isLocalLoading: false,
              user: {
                data: {
                  avatar: "https://reqres.in/img/faces/2-image.jpg",
                  name: "Janet",
                  id: 2,
                  last_name: "Weaver"
                }
              },
            },

            actions: {
              searchUser () {
                return true
              }
            },

            getters: {
              getUser: state => {
                return state.user;
              },
              isLocalLoading: state => {
                return state.isLocalLoading;
              }
            }
          }
        }

      }),
      stubs: {
        transition: false,
        RouterLink: RouterLinkStub
      }
    })
  })

  it('Find a class in html after mounted component.', () => {
    expect(wrapper.html()).toContain('user-info')
  })


})

