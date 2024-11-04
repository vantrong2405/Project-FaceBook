<template>
  <div class="z-50 grid h-14 w-full grid-cols-2 items-center bg-white shadow-sm md:grid-cols-3 dark:!text-white dark:!bg-black dark:border-b">
    <SearchBar class="z-20" />
    <div id="mid" class="hidden h-full items-center justify-center gap-2 md:flex">
      <router-link to="/home">
        <div
          id="svg-home-box "
          @click="setActiveItems('home')"
          class="product-items flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors duration-300 hover:bg-myGray-900 md:w-20 lg:w-40 dark:hover:text-black"
          :class="{ 'active-tag': activeItems === 'home' }"
        >
          <svg-home class="icon w-7" :class="{ 'active-icon': activeItems === 'home' }" />
        </div>
      </router-link>
      <router-link to="/video">
        <div
          id="svg-groups-box "
          @click="setActiveItems('video')"
          class="product-items flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors duration-300 hover:bg-myGray-900 md:w-20 lg:w-40  dark:hover:text-black"
          :class="{ 'active-tag': activeItems === 'video' }"
        >
          <svg-video class="icon w-7" :class="{ 'active-icon': activeItems === 'video' }" />
        </div>
      </router-link>
      <router-link to="/market">
        <div
          id="svg-groups-box "
          @click="setActiveItems('market')"
          class="product-items flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors duration-300 hover:bg-myGray-900 md:w-20 lg:w-40  dark:hover:text-black"
          :class="{ 'active-tag': activeItems === 'market' }"
        >
          <svg-market class="icon w-7" :class="{ 'active-icon': activeItems === 'market' }" />
        </div>
      </router-link>
      <router-link to="/game">
        <div
          id="svg-groups-box"
          @click="setActiveItems('game')"
          class="product-items flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors duration-300 hover:bg-myGray-900 md:w-20 lg:w-40  dark:hover:text-black"
          :class="{ 'active-tag': activeItems === 'game' }"
        >
          <svg-game class="icon w-7" :class="{ 'active-icon': activeItems === 'game' }" />
        </div>
      </router-link>
    </div>
    <RightMenu />
  </div>
</template>

<script>
import svgHome from "../svg/svgHome.vue"
import svgVideo from "../svg/svgVideo.vue"
import svgMarket from "../svg/svgMarket.vue"
import svgGame from "../svg/svgGame.vue"
import SearchBar from "./SearchBar.vue"
import RightMenu from "./RightMenu.vue"
import { getProfileFromLS } from "@/utils/auth"

export default {
  props: {
    leftBarMove: {
      type: Number,
      default: 0
    }
  },
  components: {
    svgHome,
    SearchBar,
    RightMenu,
    svgVideo,
    svgMarket,
    svgGame
  },
  mounted() {
    this.userCurrent = getProfileFromLS()
  },
  data() {
    return {
      userCurrent: {},
      activeItems: "home"
    }
  },
  methods: {
    setActiveItems(item) {
      this.activeItems = item
    }
  }
}
</script>
<style />
