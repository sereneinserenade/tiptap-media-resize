import { defineConfig, UserConfigExport } from 'vite'
import Unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfigExport = {
    plugins: [
      vue(),
      Unocss({ 
        presets: [
          presetIcons({
            extraProperties: {
              'display': 'inline-block',
              'vertical-align': 'middle',
            }
          }),
        ]
      }),
    ],
    base: mode === 'production' ? '/tiptap-media-resize/' : '/'
  }

  return config
})
