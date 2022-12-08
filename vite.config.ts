// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });



import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), eslintPlugin({ cache: false })],
    root: 'src',
    build: {
        outDir: '../dist'
    }
})