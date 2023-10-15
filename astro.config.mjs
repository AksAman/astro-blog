import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

const baseSite = import.meta.env.PUBLIC_VERCEL_URL ? `https://${import.meta.env.PUBLIC_VERCEL_URL}` : "http://localhost:4321"

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: baseSite,
});