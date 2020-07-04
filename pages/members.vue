<template>
  <div class="container members">
    <div class="flex justify-around mt-5">
      <div
        v-for="member in members.firstRow"
        :key="member.name"
      >
        <div
          @click="showPortraitModal = true;
                  showPortraitSrc = member.portraitSrc;
                  showPortraitName = member.name"
          class="person-box flex flex-col"
        >
          <img :src="member.figureSrc" :alt="member.name">
          <div class="mt-2 text-center">{{ member.name }}</div>
        </div>
      </div>
    </div>
    <div class="flex justify-around mt-5">
      <div
        v-for="member in members.secondRow"
        :key="member.name"
      >
        <div
          @click="showPortraitModal = true;
                  showPortraitSrc = member.portraitSrc;
                  showPortraitName = member.name"
          class="person-box flex flex-col"
        >
          <img :src="member.figureSrc" :alt="member.name">
          <div class="mt-2 text-center">{{ member.name }}</div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <PortraitModal
        v-if="showPortraitModal"
        @close="showPortraitModal = false"
        :src="showPortraitSrc"
        :name="showPortraitName"
      />
    </transition>
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
            figureSrc: require("@/assets/images/members/figures/asuka.svg"),
            portraitSrc: require("@/assets/images/members/portraits/asuka.svg"),
            description: "Adorable",
          },
          {
            name: "Yui Kazami",
            figureSrc: require("@/assets/images/members/figures/yui.svg"),
            portraitSrc: require("@/assets/images/members/portraits/yui.svg"),
            description: "Cute",
          },
          {
            name: "Kasuri Suzunami",
            figureSrc: require("@/assets/images/members/figures/kasuri.svg"),
            portraitSrc: require("@/assets/images/members/portraits/kasuri.svg"),
            description: "Pop",
          },
        ],
        secondRow: [
          {
            name: "Ema Sugisawa",
            figureSrc: require("@/assets/images/members/figures/ema.svg"),
            portraitSrc: require("@/assets/images/members/portraits/ema.svg"),
            description: "Charming",
          },
          {
            name: "Rea Katori",
            figureSrc: require("@/assets/images/members/figures/rea.svg"),
            portraitSrc: require("@/assets/images/members/portraits/rea.svg"),
            description: "Angel",
          },
          {
            name: "Rikako Natsumi",
            figureSrc: require("@/assets/images/members/figures/rikako.svg"),
            portraitSrc: require("@/assets/images/members/portraits/rikako.svg"),
            description: "Cool",
          }
        ],
      },
      showPortraitModal: false,
      showPortraitSrc: null,
      showPortraitName: null,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/members.scss";
</style>
