import "/src/styles/app.scss?t=1695131478184";
import "/@id/virtual:svg-icons-register";
import App from "/src/App.vue";
import __vite__cjsImport3_loglevel from "/node_modules/.vite/deps/loglevel.js?v=5de2d703"; const log = __vite__cjsImport3_loglevel.__esModule ? __vite__cjsImport3_loglevel.default : __vite__cjsImport3_loglevel;
import VueToastificationPlugin from "/node_modules/.vite/deps/vue-toastification.js?v=65704f91";
import { ICON_NAMES, IMAGE_NAMES, ROUTE_NAMES } from "/src/enums/index.ts?t=1695127144856";
import { createApp, getCurrentInstance, h } from "/node_modules/.vite/deps/vue.js?v=f870ab70";
import { useI18n } from "/node_modules/.vite/deps/vue-i18n.js?v=13f05309";
import { i18n } from "/src/localization/index.ts";
import { config } from "/src/config.ts";
import { router } from "/src/router/index.ts?t=1695127144856";
import { store } from "/src/store/index.ts";
import { AVATAR_NAMES } from "/src/enums/avatar-names.enum.ts";
const app = createApp({
  setup() {
    const app2 = getCurrentInstance();
    const { t, locale } = useI18n({ useScope: "global" });
    if (app2) {
      app2.appContext.config.globalProperties.$t = t;
      app2.appContext.config.globalProperties.$locale = locale;
    }
  },
  render: () => h(App)
});
const initApp = async () => {
  try {
    log.setDefaultLevel(config.LOG_LEVEL);
    app.use(router).use(store).use(i18n).use(VueToastificationPlugin);
    app.config.globalProperties.$routes = ROUTE_NAMES;
    app.config.globalProperties.$config = config;
    app.config.globalProperties.$icons = ICON_NAMES;
    app.config.globalProperties.$avatars = AVATAR_NAMES;
    app.config.globalProperties.$images = IMAGE_NAMES;
    app.config.errorHandler = function(error, instance, info) {
      log.error(error);
      log.error(instance);
      log.error(info);
    };
    app.mount("#app");
  } catch (err) {
    log.error("Error while initializing app", err);
  }
};
initApp();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9hcHAuc2NzcydcbmltcG9ydCAndmlydHVhbDpzdmctaWNvbnMtcmVnaXN0ZXInXG5cbmltcG9ydCBBcHAgZnJvbSAnQC9BcHAudnVlJ1xuaW1wb3J0IGxvZyBmcm9tICdsb2dsZXZlbCdcblxuaW1wb3J0IFZ1ZVRvYXN0aWZpY2F0aW9uUGx1Z2luIGZyb20gJ3Z1ZS10b2FzdGlmaWNhdGlvbidcbmltcG9ydCB7IElDT05fTkFNRVMsIElNQUdFX05BTUVTLCBST1VURV9OQU1FUyB9IGZyb20gJ0AvZW51bXMnXG5pbXBvcnQgeyBjcmVhdGVBcHAsIGdldEN1cnJlbnRJbnN0YW5jZSwgaCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bidcbmltcG9ydCB7IGkxOG4gfSBmcm9tICdAL2xvY2FsaXphdGlvbidcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0Bjb25maWcnXG5pbXBvcnQgeyByb3V0ZXIgfSBmcm9tICdAL3JvdXRlcidcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQC9zdG9yZSdcbmltcG9ydCB7IEFWQVRBUl9OQU1FUyB9IGZyb20gJy4vZW51bXMvYXZhdGFyLW5hbWVzLmVudW0nXG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcCh7XG4gIHNldHVwKCkge1xuICAgIGNvbnN0IGFwcCA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyB0LCBsb2NhbGUgfSA9IHVzZUkxOG4oeyB1c2VTY29wZTogJ2dsb2JhbCcgfSlcbiAgICBpZiAoYXBwKSB7XG4gICAgICBhcHAuYXBwQ29udGV4dC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kdCA9IHRcbiAgICAgIGFwcC5hcHBDb250ZXh0LmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRsb2NhbGUgPSBsb2NhbGVcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogKCkgPT4gaChBcHApLFxufSlcblxuY29uc3QgaW5pdEFwcCA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBsb2cuc2V0RGVmYXVsdExldmVsKGNvbmZpZy5MT0dfTEVWRUwpXG5cbiAgICBhcHAudXNlKHJvdXRlcikudXNlKHN0b3JlKS51c2UoaTE4bikudXNlKFZ1ZVRvYXN0aWZpY2F0aW9uUGx1Z2luKVxuXG4gICAgYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRyb3V0ZXMgPSBST1VURV9OQU1FU1xuICAgIGFwcC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kY29uZmlnID0gY29uZmlnXG4gICAgYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRpY29ucyA9IElDT05fTkFNRVNcbiAgICBhcHAuY29uZmlnLmdsb2JhbFByb3BlcnRpZXMuJGF2YXRhcnMgPSBBVkFUQVJfTkFNRVNcbiAgICBhcHAuY29uZmlnLmdsb2JhbFByb3BlcnRpZXMuJGltYWdlcyA9IElNQUdFX05BTUVTXG5cbiAgICBhcHAuY29uZmlnLmVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChlcnJvciwgaW5zdGFuY2UsIGluZm8pIHtcbiAgICAgIGxvZy5lcnJvcihlcnJvcilcbiAgICAgIGxvZy5lcnJvcihpbnN0YW5jZSlcbiAgICAgIGxvZy5lcnJvcihpbmZvKVxuICAgIH1cblxuICAgIGFwcC5tb3VudCgnI2FwcCcpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGxvZy5lcnJvcignRXJyb3Igd2hpbGUgaW5pdGlhbGl6aW5nIGFwcCcsIGVycilcbiAgfVxufVxuXG5pbml0QXBwKClcbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTztBQUNQLE9BQU87QUFFUCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBRWhCLE9BQU8sNkJBQTZCO0FBQ3BDLFNBQVMsWUFBWSxhQUFhLG1CQUFtQjtBQUNyRCxTQUFTLFdBQVcsb0JBQW9CLFNBQVM7QUFDakQsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsWUFBWTtBQUNyQixTQUFTLGNBQWM7QUFDdkIsU0FBUyxjQUFjO0FBQ3ZCLFNBQVMsYUFBYTtBQUN0QixTQUFTLG9CQUFvQjtBQUU3QixNQUFNLE1BQU0sVUFBVTtBQUFBLEVBQ3BCLFFBQVE7QUFDTixVQUFNQSxPQUFNLG1CQUFtQjtBQUMvQixVQUFNLEVBQUUsR0FBRyxPQUFPLElBQUksUUFBUSxFQUFFLFVBQVUsU0FBUyxDQUFDO0FBQ3BELFFBQUlBLE1BQUs7QUFDUCxNQUFBQSxLQUFJLFdBQVcsT0FBTyxpQkFBaUIsS0FBSztBQUM1QyxNQUFBQSxLQUFJLFdBQVcsT0FBTyxpQkFBaUIsVUFBVTtBQUFBLElBQ25EO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUSxNQUFNLEVBQUUsR0FBRztBQUNyQixDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVk7QUFDMUIsTUFBSTtBQUNGLFFBQUksZ0JBQWdCLE9BQU8sU0FBUztBQUVwQyxRQUFJLElBQUksTUFBTSxFQUFFLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksdUJBQXVCO0FBRWhFLFFBQUksT0FBTyxpQkFBaUIsVUFBVTtBQUN0QyxRQUFJLE9BQU8saUJBQWlCLFVBQVU7QUFDdEMsUUFBSSxPQUFPLGlCQUFpQixTQUFTO0FBQ3JDLFFBQUksT0FBTyxpQkFBaUIsV0FBVztBQUN2QyxRQUFJLE9BQU8saUJBQWlCLFVBQVU7QUFFdEMsUUFBSSxPQUFPLGVBQWUsU0FBVSxPQUFPLFVBQVUsTUFBTTtBQUN6RCxVQUFJLE1BQU0sS0FBSztBQUNmLFVBQUksTUFBTSxRQUFRO0FBQ2xCLFVBQUksTUFBTSxJQUFJO0FBQUEsSUFDaEI7QUFFQSxRQUFJLE1BQU0sTUFBTTtBQUFBLEVBQ2xCLFNBQVMsS0FBSztBQUNaLFFBQUksTUFBTSxnQ0FBZ0MsR0FBRztBQUFBLEVBQy9DO0FBQ0Y7QUFFQSxRQUFROyIsIm5hbWVzIjpbImFwcCJdfQ==