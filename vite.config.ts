import path from 'path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      '@mockJson': path.resolve(__dirname, 'src/mockdata/jsonData'),
      '@mockImage': path.resolve(__dirname, 'src/mockdata/imageData'),
    },
  },
})
