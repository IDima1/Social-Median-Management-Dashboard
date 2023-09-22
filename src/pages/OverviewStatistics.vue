<template>
  <div class="overview-statistics">
    <div class="overview-statistics__updates">
      <h3 class="overview-statistics__updates-header">
        {{ $t('statistics.latest-updates-title') }}
      </h3>
      <div class="overview-statistics__selectors">
        <app-button
          class="overview-statistics__selectors-button"
          :scheme="'flat'"
          :size="'tiny'"
          :text="$t('statistics.brand-addiction-btn')"
        />
        <p class="overview-statistics__updates-task">
          {{ $t('statistics.quantity-test-label') }}
        </p>
      </div>
      <template v-if="isLoaded">
        <template v-if="isLoadFailed">
          <h4 class="overview-statistics__updates-error">
            {{ $t('errors.loading-failed-msg') }}
          </h4>
        </template>
        <template v-else-if="boxes">
          <div v-for="box in boxes"
            :key="box.title"
            class="overview-statistics__updates-list">
            <div class="overview-statistics__updates-content">
              <div class="overview-statistics__updates-img">
                <img
                  :src="'../src/assets/icons/' + box.image"
                  alt="latest-update-img"
                />
              </div>
              <div class="overview-statistics__updates-text">
                <h4 class="overview-statistics__updates-descr-name">
                  {{ box.title }}
                </h4>
                <p class="overview-statistics__updates-descr-industry">
                  {{ box.industry }}
                </p>
              </div>
              <div class="overview-statistics__updates-value">
                <h5 :class="['overview-statistics__updates-profit', 'text-' + box.indicator]">
                  {{ box.profit }}
                </h5>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <h4 class="overview-statistics__updates-not-found">
            {{ $t('errors.loading-not-found-msg') }}
          </h4>
        </template>
      </template>
      <template v-else>
        <h4 class="overview-statistics__updates-loading">
          {{ $t('errors.loading-error-msg') }}
        </h4>
      </template>
    </div>
    <div class="overview-statistics__chart">
      <figure class="overview-statistics__chart-round">
        <h1 class="overview-statistics__chart-percent">{{ chartPercent + '%' }}</h1>
        <h4 class="overview-statistics__chart-descr">{{ `Posts Went Viral` }}</h4>
      </figure>
    </div>
    <div class="overview-statistics__widget">
      <h4 class="overview-statistics__widget-header">{{ $t('statistics.widget-title') }}</h4>
      <h1 class="overview-statistics__widget-value">{{ postReached + 'K' }}</h1>
      <h4 class="overview-statistics__widget-descr">{{ $t('statistics.widget-posts-reach') }}</h4>
      <h6 class="overview-statistics__widget-year">{{ $t('statistics.widget-year') }}</h6>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { AppButton } from '@/common';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

interface Box {
  id: string;
  title: string;
  image: string;
  industry: string;
  profit: string;
  indicator: string;
}

const { t } = useI18n()
const boxes = ref<Box[]>([]);
const isLoaded = ref(false)
const isLoadFailed = ref(false)
const chartPercent = 89
const postReached = 270

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3001/updates')
    boxes.value = response.data
    isLoaded.value = true
  } catch(error) {
    isLoadFailed.value = true
    console.error('Problem with uploading data')
  }
})
</script>

<style lang="scss" scoped>
.overview-statistics {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: toRem(79);
  margin-left: toRem(62);
}

.overview-statistics__updates {
  display: flex;
  flex-direction: column;
  width: toRem(315);
}

.overview-statistics__updates-header {
  color: var(--text-primary-dark);
  font-weight: 700;
  letter-spacing: toRem(1.44);
  font-size: toRem(24);
  margin-bottom: toRem(29);
}

.overview-statistics__selectors {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: toRem(37);
}

.overview-statistics__updates-list {
  display: flex;
  align-items: center;
  margin-bottom: toRem(20);
}

.overview-statistics__updates-content {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.overview-statistics__updates-img {
  margin-right: toRem(15);
}

.overview-statistics__updates-text {
  flex-grow: 1;
}

.overview-statistics__updates-profit {
  &.text-red {
    color: var(--error-main);
  }

  &.text-green {
    color: var(--success-main);
  }

  &.text-blue {
    color: var(--info-main);
  }
}

.overview-statistics__chart {
  display: flex;
  align-items: center;
}

.overview-statistics__chart-round {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: toRem(76) toRem(61) toRem(95) toRem(68);
  border-radius: 50%;
  white-space: nowrap;
  background-color: var(--background-primary-main);
  filter: drop-shadow(toRem(0) toRem(0) toRem(44) rgba(34, 37, 169, 0.10));
  width: toRem(226);
  height: toRem(226);
}

.overview-statistics__chart-percent {
  color: var(--primary-main);
  margin-bottom: toRem(10);
}

.overview-statistics__chart-descr {
  color: var(--text-primary-light);
}

.overview-statistics__widget {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: toRem(0) toRem(75) toRem(0) toRem(69);
  flex-direction: column;
  border-radius: var(--field-border-radius);
  background: linear-gradient(132deg, var(--background-quartiary-main) 1.34%, var(--background-quartiary-dark) 103.94%);
  position: relative;
  height: toRem(280);
}

.overview-statistics__widget-header {
  color: var(--white);
  margin-bottom: toRem(5);
}

.overview-statistics__widget-value {
  margin-bottom: toRem(12);
  font-size: toRem(57);
  font-weight: 700;
}

.overview-statistics__widget-descr {
  color: var(--white);
}

.overview-statistics__widget-year {
  position: absolute;
  bottom: toRem(24);
  right: toRem(24);
}
</style>
