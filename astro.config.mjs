import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
    ],
  },
});
