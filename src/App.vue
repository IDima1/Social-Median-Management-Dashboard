<template>
  <div v-if="isAppInitialized" class="app__container">
    <app-navbar class="app__navbar" />
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <component class="app__main" :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { AppNavbar } from '@/common'

import { ref } from 'vue'
import { config } from '@config'

const isAppInitialized = ref(false)

const init = async () => {
  try {
    document.title = config.APP_NAME
  } catch (error) {
    console.log(error)
  }
  isAppInitialized.value = true
}

init()
</script>

<style lang="scss" scoped>
.app__container {
  overflow: hidden;
  display: flex;
  padding: var(--app-padding-top) var(--app-padding-right) var(--app-padding-bottom) var(--app-padding-left) ;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
