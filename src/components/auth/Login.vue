<template>
  <section class="form-container log">
		<h1>Login</h1>
		<form action="">
			<section>
				<b-field label="Username">
					<b-input
						v-model="username"
						type="text"
						placeholder="Your Username"
						required>
					</b-input>
				</b-field>
				<b-field label="Password">
					<b-input
						v-model="password"
						type="password"
						password-reveal
						placeholder="Your password"
						required>
					</b-input>
				</b-field>
			</section>
			<footer >
				<b-button
					label="Login"
					type="is-primary"
					:disabled="disabledButton"
					@click="login()"/>
				<b-button type="is-text" @click="setRegister()">Register</b-button>
			</footer>
		</form>
	</section>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
	name: 'Login',
	data() {
		return {
			username: '',
			password: ''
		}
	},
	computed: {
		disabledButton () {
			return this.username && this.password === ''
		}
	},
	methods: {
		...mapMutations('auth', ['COMPONENT_ON']),
		...mapActions('auth', ['loginAction']),
		setRegister () {
			this.COMPONENT_ON('register')
		},
		login () {
			const payload = {
				username: this.username,
				password: this.password
			}
			this.loginAction(payload)
		}
	}

}
</script>

<style lang="scss" scoped>
	@import "@/assets/style/form.scss";
</style>>
