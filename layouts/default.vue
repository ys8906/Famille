<template>
  <div class="mx-20 mb-5">
    <Header
      v-if="$route.name !== 'index'"
    />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
	import Header from "@/components/Header.vue";
	export default {
		components: {
			Header,
		}
	};
</script>
