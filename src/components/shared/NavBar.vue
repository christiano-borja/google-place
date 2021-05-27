<template>
  <b-navbar type="is-black">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../../assets/logo.png"
          alt="Logo Christiano Borja"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" to="/home">
          Home
      </b-navbar-item>
    </template>

    <template #end>
       <b-navbar-dropdown label="User" :boxed="true">
        <b-navbar-item tag="router-link" to="/update-user">
          Edit
        </b-navbar-item>
        <b-navbar-item >
          <span  @click="logoutAction()">Logout</span>
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>
  
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'NavBar',

  methods: {
    ...mapActions('auth', ['logoutAction']),
    ...mapMutations('auth', ['COMPONENT_ON']),
		setUpdateUser () {
			this.COMPONENT_ON('updateUser')
		},
  }

}
</script>

<style lang="scss" scoped>
.navbar-brand{
  .navbar-item {
    max-width: 65px;
    overflow-x: hidden; 
    img{
      max-width: 130px;
      max-height: 100%;
    }
  }

}
</style>