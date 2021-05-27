<template>
	<section>
		<nav-bar />
		<update-user-form />
	</section>
</template>

<script>
import NavBar from '@/components/shared/NavBar'
import UpdateUserForm from '@/components/user/UpdateUserForm'
export default {
	name: 'UpdateUser',
	components: {
		NavBar,
		UpdateUserForm
	}
}
</script>

<style>

</style>