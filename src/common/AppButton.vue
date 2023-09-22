<template>
  <template v-if="route">
    <router-link
      class="app-button"
      :class="buttonClasses"
      v-bind="$attrs"
      :to="route"
    >
      <app-icon v-if="iconLeft" class="app-button__icon-left" :name="iconLeft" />
      <template v-if="$slots.default">
        <slot />
      </template>
      <template v-else>
        <span v-if="text" class="app-button__text">
          {{ text }}
        </span>
      </template>
      <app-icon v-if="iconRight" class="app-button__icon-right" :name="iconRight" />
    </router-link>
  </template>
  <template v-else-if="href">
    <a class="app-button" :class="buttonClasses" v-bind="$attrs" :href="href">
      <app-icon v-if="iconLeft" class="app-button__icon-left" :name="iconLeft" />
      <template v-if="$slots.default">
        <slot />
      </template>
      <template v-else>
        <span v-if="text" class="app-button__text">
          {{ text }}
        </span>
      </template>
      <app-icon v-if="iconRight" class="app-button__icon-right" :name="iconRight" />
    </a>
  </template>
  <template v-else>
    <button
      class="app-button"
      :class="buttonClasses"
      v-bind="$attrs"
      :disabled="isDisabled"
      :type="buttonType"
    >
      <app-icon v-if="iconLeft" class="app-button__icon-left" :name="iconLeft" />
      <template v-if="$slots.default">
        <slot />
      </template>
      <template v-else>
        <span v-if="text" class="app-button__text">
          {{ text }}
        </span>
      </template>
      <icon v-if="iconRight" class="app-button__icon-right" :name="iconRight" />
    </button>
  </template>
</template>

<script lang="ts" setup>
import { computed, useAttrs, useSlots } from 'vue'
import type { LocationAsRelativeRaw } from 'vue-router'

import { AppIcon } from '@/common'
import type { ICON_NAMES } from '@/enums'

type ButtonType = 'button' | 'submit' | 'reset'

const props = withDefaults(
  defineProps<{
    text?: string
    scheme?: 'filled' | 'flat' | 'none'
    modification?: 'border-circle' | 'border-rounded' | 'none'
    color?: 'primary' | 'none'
    size?: 'tiny' | 'small' | 'medium' | 'none'
    route?: LocationAsRelativeRaw
    href?: string
    iconLeft?: ICON_NAMES
    iconRight?: ICON_NAMES
  }>(),
  {
    text: '',
    scheme: 'filled',
    modification: 'border-rounded',
    color: 'primary',
    size: 'small',
    route: undefined,
    href: '',
    iconLeft: undefined,
    iconRight: undefined,
  },
)

const attrs = useAttrs()
const slots = useSlots()

const isDisabled = computed((): boolean =>
  ['', 'disabled', true].includes(attrs.disabled as string | boolean),
)

const buttonClasses = computed(() =>
  [
    'app-button',
    `app-button--scheme-${props.scheme}`,
    `app-button--${props.modification}`,
    `app-button--${props.color}`,
    `app-button--${props.size}`,
    ...(isDisabled.value ? ['app-button--disabled'] : []),
    ...((props.iconLeft || props.iconRight) && !props.text && !slots.default
      ? ['app-button--icon-only']
      : []),
  ].join(' '),
)

const buttonType = computed<ButtonType>(
  () => (attrs.type as ButtonType) || 'button',
)
</script>

<style lang="scss" scoped>
.app-button {
  --button-transition-duration: 0.2s;
  --button-icon-size: 1.2em;

  outline: 0;
  font-family: var(--app-font-family);
  margin: 0;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: min-content;
  justify-content: center;
  transition: var(--button-transition-duration) ease-in;
  transition-property: background-color, color;
  text-decoration: none;
  border: var(--app-button-border);
  background-color: var(--app-button-bg);
  color: var(--app-button-text);

  &:disabled,
  &--disabled {
    cursor: not-allowed;
    pointer-events: none;
    filter: grayscale(0.75);
    opacity: 0.5;
  }

  &:not([disabled]):hover {
    text-decoration: none;
    transition-timing-function: ease-out;
    color: var(--app-button-text-hover);
    background-color: var(--app-button-bg-hover);
    border: var(--app-button-border-hover);
  }

  &:not([disabled]):focus {
    text-decoration: none;
    transition-timing-function: ease-out;
    color: var(--app-button-text-focused);
    background-color: var(--app-button-bg-focused);
    border: var(--app-button-border-focused);
  }

  &:not([disabled]):active {
    text-decoration: none;
    transition-timing-function: ease-out;
    color: var(--app-button-text-active);
    background-color: var(--app-button-bg-active);
    border: var(--app-button-border-active);
  }

  &--scheme-filled {
    --app-button-filled-bg: var(--background-primary-main);
    --app-button-filled-bg-hover: var(--background-primary-main);
    --app-button-filled-bg-focused: var(--background-primary-main);
    --app-button-filled-bg-active: var(--background-primary-main);

    --app-button-filled-text: var(--text-secondary-main);
    --app-button-filled-text-hover: var(--text-secondary-main);
    --app-button-filled-text-focused: var(--text-secondary-main);
    --app-button-filled-text-active: var(--text-secondary-main);

    --app-button-filled-border: 0;
    --app-button-filled-border-hover: 0;
    --app-button-filled-border-active: 0;
    --app-button-filled-border-focused: 0;

    --app-button-bg: var(--app-button-filled-bg);
    --app-button-bg-hover: var(--app-button-filled-bg-hover);
    --app-button-bg-focused: var(--app-button-filled-bg-focused);
    --app-button-bg-active: var(--app-button-filled-bg-active);

    --app-button-text: var(--app-button-filled-text);
    --app-button-text-hover: var(--app-button-filled-text-hover);
    --app-button-text-focused: var(--app-button-filled-text-focused);
    --app-button-text-active: var(--app-button-filled-text-active);

    --app-button-border: var(--app-button-filled-border);
    --app-button-border-hover: var(--app-button-filled-border-hover);
    --app-button-border-active: var(--app-button-filled-border-active);
    --app-button-border-focused: var(--app-button-filled-border-focused);
  }

  &--scheme-flat {
    --app-button-flat-bg: none;
    --app-button-flat-bg-hover: none;
    --app-button-flat-bg-focused: none;
    --app-button-flat-bg-active: var(--background-secondary-main);

    --app-button-flat-text: var(--text-primary-light);
    --app-button-flat-text-hover: var(--text-primary-light);
    --app-button-flat-text-focused: var(--text-primary-light);
    --app-button-flat-text-active: var(--text-primary-light);

    --app-button-flat-border: #{toRem(1)} solid var(--border-primary-main);
    --app-button-flat-border-hover: var(--app-button-flat-border);
    --app-button-flat-border-focused: var(--app-button-flat-border);
    --app-button-flat-border-active: var(--app-button-flat-border);

    --app-button-bg: var(--background-secondary-main);
    --app-button-bg-hover: var(--app-button-flat-bg-hover);
    --app-button-bg-focused: var(--app-button-flat-bg-focused);
    --app-button-bg-active: var(--app-button-flat-bg-active);

    --app-button-text: var(--app-button-flat-text);
    --app-button-text-hover: var(--app-button-flat-text-hover);
    --app-button-text-focused: var(--app-button-flat-text-focused);
    --app-button-text-active: var(--app-button-flat-text-active);

    --app-button-border: var(--app-button-flat-border);
    --app-button-border-hover: var(--app-button-flat-border-hover);
    --app-button-border-focused: var(--app-button-flat-border-focused);
    --app-button-border-active: var(--app-button-flat-border-active);
  }

  &--scheme-none {
    --app-button-none-bg: transparent;
    --app-button-none-bg-hover: transparent;
    --app-button-none-bg-focused: transparent;
    --app-button-none-bg-active: transparent;

    --app-button-none-text: var(--text-primary-main);
    --app-button-none-text-hover: var(--text-primary-main);
    --app-button-none-text-focused: var(--text-primary-main);
    --app-button-none-text-active: var(--text-primary-main);

    --app-button-bg: var(--app-button-none-bg);
    --app-button-bg-hover: var(--app-button-none-bg-hover);
    --app-button-bg-focused: var(--app-button-none-bg-focused);
    --app-button-bg-active: var(--app-button-none-bg-active);

    --app-button-text: var(--app-button-none-text);
    --app-button-text-hover: var(--app-button-none-text-hover);
    --app-button-text-focused: var(--app-button-none-text-focused);
    --app-button-text-active: var(--app-button-none-text-active);
  }

  &--border-circle {
    border-radius: toRem(100);
  }

  &--border-rounded {
    border-radius: toRem(18);
  }

  &--tiny {
    --button-icon-size: #{toRem(24)};

    font-size: toRem(10);
    font-weight: 600;
    line-height: normal;
    padding: toRem(11) toRem(22) toRem(13) toRem(23);
    height: toRem(36);
  }

  &--small {
    --button-icon-size: #{toRem(24)};

    font-size: toRem(14);
    line-height: toRem(24);
    font-weight: 700;
    gap: toRem(16);
    height: toRem(56);

    &.app-button--icon-only {
      --button-icon-size: #{toRem(24)};

      padding: toRem(12);
      width: calc(var(--button-icon-size) + #{toRem(12)});
      height: calc(var(--button-icon-size) + #{toRem(12)});
    }
  }

  &--medium {
    --button-icon-size: #{toRem(24)};

    padding: toRem(10) toRem(53);
    font-size: toRem(12);
    line-height: toRem(20);
    font-weight: 700;
    gap: toRem(8);
    height: toRem(40);

    &.app-button--icon-only {
      --button-icon-size: #{toRem(42)};

      padding: toRem(12);
      width: calc(var(--button-icon-size) + #{toRem(12)});
      height: calc(var(--button-icon-size) + #{toRem(12)});
    }
  }
}

.app-button .app-button__icon-left,
.app-button .app-button__icon-right {
  height: var(--button-icon-size);
  width: var(--button-icon-size);
}

.app-button__text {
  color: inherit;
  font: inherit;
  pointer-events: none;
  word-break: break-all;
  min-width: 0;

  @include text-ellipsis;
}
</style>
