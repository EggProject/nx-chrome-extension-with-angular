import { defineManifest } from '@crxjs/vite-plugin';

export default defineManifest({
  name: 'create-chrome-ext',
  description: 'Chrome extension description',
  author: 'EggProject',
  version: '0.0.1',
  manifest_version: 3,
  icons: {
    '16': 'img/logo-16.png',
    '32': 'img/logo-34.png',
    '48': 'img/logo-48.png',
    '128': 'img/logo-128.png',
  },
  devtools_page: 'devtools.html',
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/content/index.ts'],
      run_at: 'document_start',
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        'img/logo-16.png',
        'img/logo-34.png',
        'img/logo-48.png',
        'img/logo-128.png',
      ],
      matches: [],
    },
    {
      resources: [
        'inject-js-library/main.js',
      ],
      matches: ['<all_urls>'],
    }
  ],
});
