<template>
  <section class="form-container log">
		<h1>Register</h1>
		<form action="">
			<section >
				<b-field label="Username">
					<b-input
						type="text"
						v-model="username"
						placeholder="Your Username"
						required>
					</b-input>
				</b-field>

				<b-field label="Password">
					<b-input
						type="password"
						v-model="password"
						password-reveal
						placeholder="Your password"
						required>
					</b-input>
				</b-field>

			</section>
			<footer >
				<b-button
					label="Register"
					:disabled="disabledButton"
					@click="setRegister()"
					type="is-primary" />
				<b-button
					label="Back to login"
					@click="setLogin()"
					type="is-text" />
			</footer>
		</form>
	</section>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
	name: 'Register',
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
		...mapActions('auth', ['registerAction']),
		setLogin () {
			this.COMPONENT_ON('login')
		},
		setRegister() {
			const payload = {
				username: this.username,
				password: this.password
			}
			this.registerAction(payload)
		}
	}

}
</script>

<style lang="scss" scoped>
	@import "@/assets/style/form.scss";
</style>>
