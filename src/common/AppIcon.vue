<template>
  <template v-if="`#${name}-icon`">
    <svg class="icon" :class="iconClass" aria-hidden="true">
      <use v-if="`#${name}-icon`" :href="`#${name}-icon`" />
    </svg>
  </template>
  <template v-else>
    <svg class="avatar" :class="iconClass" aria-hidden="true">
      <use v-if="`#${name}-avatar`" :href="`#${name}-avatar`"/>
    </svg>
  </template>
</template>

<script lang="ts" setup>
import { ICON_NAMES, AVATAR_NAMES, IMAGE_NAMES } from '@/enums'
import { computed } from 'vue'

const props = defineProps<{
  name: ICON_NAMES | AVATAR_NAMES | IMAGE_NAMES
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'
}>()

const iconClass = computed(() =>
  [
    'icon',
    'avatar',
    `icon--${props.size}`
  ].join(' '),
)

</script>

<style lang="scss" scoped>
.icon, .avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  width: toRem(16);
  height: toRem(18);

  &--tiny {
    height: toRem(18);
    width: toRem(16);
  }

  &--small {
    height: toRem(18);
    width: toRem(24);
  }

  &--medium {
    height: toRem(24);
    width: toRem(24);
  }

  &--large {
    height: toRem(42);
    width: toRem(42);
  }

  &--huge {
    height: toRem(50);
    width: toRem(50);
  }
}
</style>
