//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//export default defineConfig({
////  plugins: [react()],
//})
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/myapp/", // Adjust if your app is served from a subdirectory
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for src directory
    },
  },
  build: {
    outDir: "build", // Customize the output directory
  },
  server: {
    port: 3000, // Specify the server port
    strictPort: true, // If the port is occupied, Vite will exit instead of trying another one
    https: false, // Enable HTTPS, set to true or an object if you have custom certs
  },
  envDir: "./env", // Specify a directory to load .env files from
});
