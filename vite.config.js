import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),babel({ presets: [reactCompilerPreset()] })],

  css:{
    preprocessorOptions:{
      scss:{
        silenceDeprecations:['import','if-function','global-builtin', 'color-functions']
      }
    }
  },

  resolve:{
    alias:{
      'pages': path.resolve(__dirname, 'src/pages')
    }
  }
})