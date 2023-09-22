/// <reference types="vite/client" />
import { config } from '@config'
import { ICON_NAMES, IMAGE_NAMES, ROUTE_NAMES } from '@/enums'
import { WritableComputedRef } from 'vue'
import { AVATAR_NAMES } from './enums/avatar-names.enum'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $routes: typeof ROUTE_NAMES
    $icons: typeof ICON_NAMES
    $avatars: typeof AVATAR_NAMES
    $images: typeof IMAGE_NAMES
    $config: typeof config
    $locale: WritableComputedRef
  }
}

interface ImportMetaEnv {
  VITE_ENVIRONMENT: string
  VITE_PORT: string
  VITE_API_URL: string
  VITE_APP_NAME: string
}

declare global {
  interface Document {
    ENV: ImportMetaEnv
  }
}
