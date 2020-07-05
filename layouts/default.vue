<template>
  <div>
    <Header
      v-if="!noHeaderRoutes.some(r => r == $route.name)"
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
    },
    data() {
      return {
        noHeaderRoutes: [
          "index",
          "order-complete",
        ]
      }
    },
	};
</script>
