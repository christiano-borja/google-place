<template>
  <section>
		<div class="container">
      <b-loading :is-full-page="isFullPage" v-model="isLocalLoading" :can-cancel="true"></b-loading>
			<register v-if="registerOn"/>
			<login v-if="loginOn"/>
		</div>
	</section>
</template>

<script>
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import { mapGetters } from 'vuex'
export default {
	name: 'LogPage',
	components: {
		Login,
		Register
	},

  data() {
    return {
      isFullPage: true
    }
  },

	computed: {
		...mapGetters('auth', ['getComponentOn', 'isLocalLoading']),
		registerOn() {
			return this.getComponentOn === 'register'
		},
		loginOn() {
			return this.getComponentOn === 'login'
		}
	}
}
</script>

<style>

</style>