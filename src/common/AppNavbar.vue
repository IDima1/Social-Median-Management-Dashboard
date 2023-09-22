<template>
  <div class="app-navbar">
    <div class="app-navbar__header">
      <h3 class="app-navbar-title">{{ $t('sidebar.socializer-title') }}</h3>
    </div>
    <div class="app-navbar__menu">
      <app-button
        class="app-navbar__link"
        :scheme="'none'"
        :text="$t('sidebar.overview-btn')"
        :route="{ name: $routes.mainPage}"
        :icon-left="$icons.dasboard"
      />
      <app-button
        class="app-navbar__link"
        :scheme="'none'"
        :text="$t('sidebar.leaderboard-btn')"
        :route="{ name: $routes.mainPage}"
        :icon-left="$icons.leaderboard"
      />
      <app-button
        class="app-navbar__link"
        :scheme="'none'"
        :text="$t('sidebar.spreadsheets-btn')"
        :route="{ name: $routes.mainPage}"
        :icon-left="$icons.viewList"
      />
      <app-button
        class="app-navbar__link"
        :scheme="'none'"
        :text="$t('sidebar.administration-btn')"
        :route="{ name: $routes.mainPage}"
        :icon-left="$icons.moneyBillStack"
      />
      <app-button
        class="app-navbar__link"
        :scheme="'none'"
        :text="$t('sidebar.sales-btn')"
        :route="{ name: $routes.mainPage}"
        :icon-left="$icons.shoppingBag"
      />
      <app-button
        class="app-navbar__link"
        :scheme="'none'"
        :text="$t('sidebar.schedule-btn')"
        :route="{ name: $routes.mainPage}"
        :icon-left="$icons.calendar"
      />
    </div>
    <div class="app-navbar__teams">
      <h6 class="app-navbar__teams-header">{{ $t('sidebar.teams-title') }}</h6>
      <app-button
        class="app-navbar__link"
        :scheme="'none'"
        :text="$t('sidebar.message-btn')"
        :route="{ name: $routes.mainPage}"
        :icon-left="$icons.comment"
      />
      <app-button
        class="app-navbar__link"
        :scheme="'none'"
        :text="$t('sidebar.support-btn')"
        :route="{ name: $routes.mainPage}"
        :icon-left="$icons.phone"
      />
    </div>
    <div class="app-navbar__footer">
      <app-button
        :scheme="'filled'"
        :icon-left="$icons.arrowUp"
        :size="'medium'"
      />
      <h4 class="app-navbar__footer-text">{{$t('sidebar.upgrade-txt')}}</h4>
      <app-button
        class="app-navbar__link"
        :scheme="'filled'"
        :text="$t('sidebar.upgrade-btn')"
        :route="{ name: $routes.mainPage}"
        :size="'medium'"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AppLogo } from '@/common'
import { AppButton } from '@/common'
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.app-navbar {
  display: flex;
  flex-direction: column;
  padding: toRem(41) toRem(44) var(--app-padding-bottom) var(--app-padding-left);
  background: var(--primary-main);
  border-radius: var(--field-border-radius);
  box-shadow: 0 toRem(14) toRem(34) 0 rgba(34, 37, 169, 0.40);
  width: toRem(294);
  height: toRem(884);

  @include respond-to(tablet) {
    flex-wrap: wrap;
  }
}

.app-navbar__header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-navbar-title {
  font-size: toRem(28);
  font-weight: 700;
  line-height: toRem(22);
  letter-spacing: toRem(-0.4);
}

.app-navbar__menu {
  padding-top: toRem(42);
}

.app-navbar__teams {
  display: flex;
  flex-direction: column;
  padding-top: toRem(48);
  gap: toRem(16);
}

.app-navbar__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: toRem(33);
  gap: toRem(24);
}

.app-navbar__footer-text {
  display: flex;
  text-align: center;
  color: var(--white);
  font-size: toRem(16);
  font-weight: 400;
  line-height: toRem(22);
}

.app-navbar__link {
  opacity: 0.25;

  &.router-link-active {
    opacity: 1;
  }
}
</style>
