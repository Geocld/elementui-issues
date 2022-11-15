import {
  createVuePlugin
} from 'vite-plugin-vue2'
import vitePluginImportus from 'vite-plugin-importus'

export default {
  plugins: [
    createVuePlugin(),
    vitePluginImportus([
      {
        libraryName: 'element-ui',
        styleLibraryDirectory: "lib/theme-chalk",
        customName: (name, file) => {
          return `element-ui/lib/${name}`
        },
        customStyleName: (name, file) => {
          return `element-ui/lib/theme-chalk/${name}.css`
        }
      }
    ])
  ],
};