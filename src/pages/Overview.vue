<template>
  <div class="overview">
    <overview-header/>
    <overview-advices/>
    <overview-statistics/>
  </div>
</template>

<script lang="ts" setup>
import OverviewHeader from './OverviewHeader.vue';
import OverviewAdvices from './OverviewAdvices.vue';
import OverviewStatistics from './OverviewStatistics.vue';
</script>

<style lang="scss" scoped>
.overview {
  display: flex;
  flex-direction: column;
}

</style>
