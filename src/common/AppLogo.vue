<template>
  <div class="app-name">
    <h1 class="app-name__header">{{$t('sidebar.logo-name')}}</h1>
    <router-link class="app-name__link" :to="{ name: $routes.mainPage }" />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>
<style lang="scss" scoped>
.app-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.app-name__header {
  font-size: toRem(28);
  font-weight: 700;
}

.app-name__link {
  display: flex;
}
</style>
