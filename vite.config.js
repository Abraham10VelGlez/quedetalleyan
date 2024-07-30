import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {//configuraciones para desarrollo en docker-compose.yml
    watch: {//configuraciones para desarrollo en docker-compose.yml
      usePolling: true,//configuraciones para desarrollo en docker-compose.yml
    },//configuraciones para desarrollo en docker-compose.yml
    host: '0.0.0.0',//configuraciones para desarrollo en docker-compose.yml
    port: 5174//configuraciones para desarrollo en docker-compose.yml
  },//configuraciones para desarrollo en docker-compose.yml
  plugins: [react()],
})
