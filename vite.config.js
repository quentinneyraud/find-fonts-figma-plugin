import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// export default defineConfig({
//   plugins: [viteSingleFile()],
//   build: {
//     cssCodeSplit: false,

//     assetsInlineLimit: 100000000,
//     rollupOptions: {
//       output: {
//         manualChunks: () => "code.js",
//       },
//     },
//   }
// })
export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        code: './src/plugin/index.js'
      },
      output: {
        entryFileNames: 'code.js'
      }
    }
  }
})
