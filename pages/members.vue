<template>
  <div class="container">
    <div>
      <h1 class="title">
        Member
      </h1>
    </div>
    <div>
      <div
        v-for="member in members"
        :key="member.name"
      >
        <p>{{ member.name }}</p>
        <p>{{ member.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  head() {
    return {
      title: "Members"
    }
  },
  data() {
    return {
      members: [
        {
          name: "Yui Kazami",
          description: "Cute"
        },
        {
          name: "Leah Katori",
          description: "Angel"
        },
        {
          name: "Yukino Asuka",
          description: "Adorable"
        },
        {
          name: "Kasuri Suzunami",
          description: "Pop"
        },
        {
          name: "Ema Sugisawa",
          description: "Charming"
        },
        {
          name: "Rikako Natsumi",
          description: "Cool"
        }
      ]
    }
  },
})
</script>
