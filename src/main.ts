import '@/styles/app.scss'
import 'virtual:svg-icons-register'

import App from '@/App.vue'
import log from 'loglevel'

import VueToastificationPlugin from 'vue-toastification'
import { ICON_NAMES, IMAGE_NAMES, ROUTE_NAMES } from '@/enums'
import { createApp, getCurrentInstance, h } from 'vue'
import { useI18n } from 'vue-i18n'
import { i18n } from '@/localization'
import { config } from '@config'
import { router } from '@/router'
import { store } from '@/store'
import { AVATAR_NAMES } from './enums/avatar-names.enum'

const app = createApp({
  setup() {
    const app = getCurrentInstance()
    const { t, locale } = useI18n({ useScope: 'global' })
    if (app) {
      app.appContext.config.globalProperties.$t = t
      app.appContext.config.globalProperties.$locale = locale
    }
  },
  render: () => h(App),
})

const initApp = async () => {
  try {
    log.setDefaultLevel(config.LOG_LEVEL)

    app.use(router).use(store).use(i18n).use(VueToastificationPlugin)

    app.config.globalProperties.$routes = ROUTE_NAMES
    app.config.globalProperties.$config = config
    app.config.globalProperties.$icons = ICON_NAMES
    app.config.globalProperties.$avatars = AVATAR_NAMES
    app.config.globalProperties.$images = IMAGE_NAMES

    app.config.errorHandler = function (error, instance, info) {
      log.error(error)
      log.error(instance)
      log.error(info)
    }

    app.mount('#app')
  } catch (err) {
    log.error('Error while initializing app', err)
  }
}

initApp()
