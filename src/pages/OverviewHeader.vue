<template>
  <div class="overview-header">
    <div class="overview-header__title">
      <p class="overview-header__welcome">{{ $t('header.greetings-title') }}</p>
      <h2 class="overview-header__headline">{{ $t('header.dashboard-title') }}</h2>
    </div>
    <div class="overview-header__account-info">
      <app-icon :name="$icons.bell" :size="'tiny'" />
      <app-icon :name="$icons.setting" :size="'medium'"/>
      <img src="../assets/avatars/men-avatar.svg" alt="">
    </div>
  </div>
</template>
<script lang="ts" setup>
import { AppIcon } from '@/common';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>
<style lang="scss" scoped>
.overview-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: toRem(33) toRem(67);
  width: 100%;
}

.overview-header__title {
  display: flex;
  flex-direction: column;
  gap: toRem(4);
}

.overview-header__welcome {
  color: var(--text-primary-light);
  font-size: toRem(15);
}

.overview-header__account-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: toRem(40)
}
</style>
