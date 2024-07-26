import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tsconfigPaths from 'vite-tsconfig-paths';
// import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // tsconfigPaths(),
    react(),
    // eslintPlugin({
    //     cache: false,
    //     include: ['./src/**/*.ts', './src/**/*.tsx'],
    // }),
  ],
})
