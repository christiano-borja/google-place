<template>
  <section class="user-content">
		<b-loading :is-full-page="isFullPage" v-model="isLocalLoading" :can-cancel="true" />
		<div class="user-info" v-if="getUser.data">
			<img :src="getUser.data.avatar" alt="Avatar">
			<div class="text-container">	
				<h2>{{ fullName }}</h2>
				<a :href="mailto">{{ getUser.data.email }}</a>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	name: 'UserDetail',

	data() {
		return {
			isFullPage: false
		}
	},

	computed: {
		...mapGetters('user', ['getUser', 'isLocalLoading']),
		fullName() {
			return `${this.getUser.data.first_name} ${this.getUser.data.last_name}`
		},

		mailto() {
			return `mailto:${this.getUser.data.email}`
		}
	},

	mounted() {
		this.getUserAction()
	},

	methods: {
		...mapActions('user', ['getUserAction'])
	}
}
</script>

<style lang="scss" scoped>
	@import "~@/assets/style/_variables.scss";
	.user-content{
		background-color: #000;
		padding: 80px 20px 50px;
		border-top: 3px solid $is-primary-light;
		border-bottom: 4px solid $is-primary;
	}
	.user-info{
		display: flex;
		justify-content: flex-start;
		img{
			border-radius: 100%;
			overflow: hidden;
			margin-right: 20px;
			border: 2px solid $is-primary;
		}
		.text-container{
			text-align: left;
			h2{
				font-size: 1.5rem;
				font-weight: 700;
				color: $is-primary;
			}
			a{
				color: #3e8ed0;
			}
		}
	}
</style>
