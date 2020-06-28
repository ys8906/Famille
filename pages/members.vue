<template>
  <div class="container members">
    <div class="flex justify-around my-10">
      <div
        v-for="member in members.firstRow"
        :key="member.name"
      >
        <div
          @click="showPortraitModal = true"
          class="person-box flex flex-col"
        >
          <img :src="member.figureSrc" :alt="member.name">
          <div class="mt-2 text-center">{{ member.name }}</div>
        </div>
        <PortraitModal
          v-if="showPortraitModal"
          @close="showPortraitModal = false"
          :portraitSrc="member.portraitSrc"
          :name="member.name"
        />
      </div>
    </div>
    <div class="flex justify-around my-10">
      <div
        v-for="member in members.secondRow"
        :key="member.name"
      >
        <div
          @click="showPortraitModal = true"
          class="person-box flex flex-col"
        >
          <img :src="member.figureSrc" :alt="member.name">
          <div class="mt-2 text-center">{{ member.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import PortraitModal from "../components/PortraitModal.vue"

export default Vue.extend({
  components: {
    PortraitModal,
  },
  head() {
    return {
      title: "Members"
    }
  },
  data() {
    return {
      members: {
        firstRow: [
          {
            name: "Yukino Asuka",
            figureSrc: "_nuxt/assets/images/members/figures/asuka.svg",
            portraitSrc: "_nuxt/assets/images/members/portraits/asuka.svg",
            description: "Adorable",
          },
          {
            name: "Yui Kazami",
            figureSrc: "_nuxt/assets/images/members/figures/yui.svg",
            portraitSrc: "_nuxt/assets/images/members/portraits/yui.svg",
            description: "Cute",
          },
          {
            name: "Kasuri Suzunami",
            figureSrc: "_nuxt/assets/images/members/figures/kasuri.svg",
            portraitSrc: "_nuxt/assets/images/members/portraits/kasuri.svg",
            description: "Pop",
          },
        ],
        secondRow: [
          {
            name: "Ema Sugisawa",
            figureSrc: "_nuxt/assets/images/members/figures/ema.png",
            portraitSrc: "_nuxt/assets/images/members/portraits/ema.png",
            description: "Charming",
          },
          {
            name: "Rea Katori",
            figureSrc: "_nuxt/assets/images/members/figures/rea.svg",
            portraitSrc: "_nuxt/assets/images/members/portraits/rea.svg",
            description: "Angel",
          },
          {
            name: "Rikako Natsumi",
            figureSrc: "_nuxt/assets/images/members/figures/rikako.svg",
            portraitSrc: "_nuxt/assets/images/members/portraits/rikako.svg",
            description: "Cool",
          }
        ],
      },
      showPortraitModal: false,
    }
  },
})
</script>
