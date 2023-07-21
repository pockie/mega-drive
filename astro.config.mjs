import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://pockie-github.io',
	base: '/mega-drive',
	integrations: [mdx(), sitemap()],
});
