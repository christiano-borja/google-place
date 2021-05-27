<template>
  <section class="form-container update">
		<h1>Update User</h1>
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

				<b-field label="Job">
					<b-input
						type="text"
						v-model="job"
						placeholder="Your job"
						required>
					</b-input>
				</b-field>

			</section>
			<footer >
				<b-button
					label="Update user"
					:disabled="disabledButton"
					@click="updateUser()"
					type="is-primary" />
				<div class="updated" v-if="updatedDate">
					Updated at <strong>{{ updatedDate | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</strong>
				</div>
			</footer>
		</form>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	name: 'UpdateUserForm',
	data() {
		return {
			username: '',
			job: ''
		}
	},
	computed: {
		...mapGetters('user', ['getUser']),
		disabledButton () {
			return this.username && this.job === ''
		},
		updatedDate() {
			let update = ''
			if (this.getUser.updatedAt) update = this.getUser.updatedAt
			return update
		}
	},
	methods: {
		...mapActions('user', ['updateUserAction']),
		updateUser() {
			const payload = {
				username: this.username,
				job: this.job
			}
			this.updateUserAction(payload)
		}
	}

}
</script>

<style lang="scss" scoped>
	@import "@/assets/style/_variables.scss";
	@import "@/assets/style/form.scss";
	.update{
		margin: 0;
		border: 0;
		h1{
			padding: 50px 0;
			border-top: 3px solid $is-primary-light;
			border-bottom: 2px solid $is-primary;
		}
		.updated{
			margin-top: 10px;
		}
		strong{
			color: #3e8ed0;
		}
	}
</style>>
