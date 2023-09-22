<template>
  <div class="overview-advices">
    <div class="overview-advices__updates">
      <figure class="overview-advices__updates-figure">
        <img class="overview-advices__updates-img" src="../assets/images/cup-of-tea-image.svg" alt="">
      </figure>
      <div class="overview-advices__updates-wrapper">
        <div class="overview-advices__updates-text">
          <h4 class="overview-advices__updates-header">{{ $t('advices.latest-updates-txt') }}</h4>
          <h6 class="overview-advices__updates-category">{{ $t('advices.category-updates-txt') }}</h6>
        </div>
        <div class="overview-advices__updates-button">
          <app-icon :name="$icons.add" :size="'large'"/>
        </div>
      </div>
    </div>
    <div class="overview-advices__stats">
      <div class="overview-advices__stats-graph">
        <img class="overview-advices__stats-img" src="../assets/images/graph-image.svg" alt="">
        <div class="overview-advices__stats-legend">
          <div class="overview-advices__stats-visitors">
            <h5 class="overview-advices__stats-header">{{ graphQuantity }}</h5>
            <p class="overview-advices__stats-visitors-descr">{{ $t('advices.graph-visitors') }}</p>
          </div>
          <div class="overview-advices__stats-percent">
            <div class="overview-advices__stats-info">
              <app-icon :name="$icons.arrowUpGreen" :size="'tiny'"/>
              <h5 class="overview-advices__stats-header--green">{{ graphPercent }}</h5>
            </div>
            <p class="overview-advices__stats-percent-descr">{{ $t('advices.graph-quantity-percent') }}</p>
          </div>
        </div>
      </div>
      <div class="overview-advices__stats-wrapper">
        <div class="overview-advices__stats-videos">
          <app-icon :name="$icons.video" :size="'large'"/>
          <h4 class="overview-advices__stats-videos-header">{{ graphVideos }}</h4>
          <p class="overview-advices__stats-videos-text">{{ $t('advices.quantity-videos') }}</p>
        </div>
        <div class="overview-advices__stats-posts">
          <app-icon :name="$icons.schedule" :size="'small'"/>
          <h4 class="overview-advices__stats-posts-header">{{ graphPosts }}</h4>
          <p class="overview-advices__stats-post-text">{{ $t('advices.quantity-posts') }}</p>
        </div>
      </div>
    </div>
    <div class="overview-advices__weather">
      <h3 class="overview-advices__weather-question">{{ `What's your` }}<br>{{ `plan?` }}</h3>
      <h4 class="overview-advices__weather-compliment">{{ $t('advices.weather-descr') }}</h4>
      <h1 class="overview-advices__weather-temperature">{{ weatherDegree }}</h1>
      <div class="overview-advices__weather-button">
        <figure class="overview-advices__weather-button-background">
          <app-icon :name="$icons.add" :size="'large'"/>
        </figure>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AppIcon } from '@/common';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
// workpiece, if you will use data download
const graphQuantity = '$21.2K'
const graphPercent = '105.23 %'
const graphVideos = '40K'
const graphPosts = '130'
const weatherDegree = '36°'
</script>

<style lang="scss" scoped>
.overview-advices {
  display: flex;
  flex-direction: row;
  gap: toRem(51);
  margin: toRem(34) toRem(51) toRem(53) toRem(62);
}

.overview-advices__updates {
  display: flex;
  flex-direction: column;
  background-color: var(--background-secondary-dark);
  padding: toRem(20);
  border-radius: var(--field-border-radius);
}

.overview-advices__updates-figure {
  background-color: var(--background-tertiary-main);
  border-radius: var(--field-border-radius);
  margin-bottom: toRem(58);
}

.overview-advices__updates-img {
  padding: toRem(17) toRem(54) toRem(3) toRem(57);
}

.overview-advices__updates-wrapper {
  display: flex;
  justify-content: space-between;
}

.overview-advices__updates-text {
  display: flex;
  flex-direction: column;
  gap: toRem(3);
}

.overview-advices__updates-category {
  color: var(--text-primary-light);
}

.overview-advices__stats {
  display: flex;
  flex-direction: column;
  gap: toRem(30);
}

.overview-advices__stats-graph {
  background-color: var(--background-primary-dark);
  border-radius: toRem(20);
  padding: toRem(0) toRem(27) toRem(11) toRem(29);
}

.overview-advices__stats-img {
  width: toRem(243);
  height: toRem(122);
}

.overview-advices__stats-legend {
  display: flex;
  justify-content: space-between;
}

.overview-advices__stats-visitors {
  display: flex;
  flex-direction: column;
  gap: toRem(3);
}

.overview-advices__stats-header {
  &--green {
    color: var(--success-light)
  }
}

.overview-advices__stats-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: toRem(27);
}

.overview-advices__stats-videos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: toRem(8);
  background-color: var(--background-primary-dark);
  border-radius: var(--field-border-radius);
  padding: toRem(18) toRem(28) toRem(28) toRem(27);
  width: toRem(136);
  height: toRem(134);
}

.overview-advices__stats-videos-header {
  margin-top: toRem(7);
}

.overview-advices__stats-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.overview-advices__stats-percent-descr {
  margin-left: toRem(16);
}

.overview-advices__stats-videos-text {
  white-space: nowrap;
}

.overview-advices__stats-posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: toRem(8);
  background-color: var(--primary-main);
  border-radius: var(--field-border-radius);
  padding: toRem(35) toRem(28) toRem(28) toRem(27);
  width: toRem(136);
  height: toRem(134);
}

.overview-advices__stats-posts-header {
  color: var(--white);
  margin-top: toRem(18);
}

.overview-advices__stats-post-text {
  color: var(--white);
  white-space: nowrap;
}

.overview-advices__weather {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: toRem(36) toRem(99) toRem(0) toRem(36);
  background-image: url(../assets/images/city-image.svg);
  background-repeat: no-repeat;
  color: var(--background-primary-main);
  position: relative;
}

.overview-advices__weather-question {
  margin-bottom: toRem(6);
}

.overview-advices__weather-compliment {
  margin-bottom: toRem(9);
  color: var(--white);
}

.overview-advices__weather-button-background {
  display: flex;
  position: absolute;
  bottom: toRem(17);
  right: toRem(23);
  padding: toRem(15);
  border-radius: toRem(20) toRem(0) toRem(20) toRem(20);
  background: var(--background-primary-main);
}
</style>
