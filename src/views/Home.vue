<template>
	<section>
		<nav-bar />
		<user-detail />
		<google-places />
	</section>
</template>

<script>
import NavBar from '@/components/shared/NavBar'
import UserDetail from '@/components/user/UserDetail'
import GooglePlaces from '@/components/places/GooglePlaces.vue'
export default {
	components: {
		NavBar,
    UserDetail,
		GooglePlaces
  }
}
</script>
