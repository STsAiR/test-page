import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/test-page/", // Change to your repo name
    plugins: [react()],
});
