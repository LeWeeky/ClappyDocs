import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ClappyDocs',
  tagline: 'Documentation for all ClappyCrew\'s projects!',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.clappycrew.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'leweeky', // Usually your GitHub org/user name.
  projectName: 'clappycrew', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/LeWeeky/ClappyDocs/',
		  routeBasePath: '/'
        },
		blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'ClappyDocs',
      logo: {
        alt: 'Clappy Logo',
        src: 'img/Clappy-64x64.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Intro',
        },
        {to: '/category/clappybot', label: 'ClappyBot', position: 'left'},
        {to: '/category/basic', label: 'Basic', position: 'left'},
        {
          href: 'https://github.com/LeWeeky/ClappyDocs.git',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'ClappyBot',
              to: '/docs/clappybot',
            },
          ],
        },
        {
          title: 'Community',
          items: [
			{
              label: 'ClappyCrew',
              href: 'https://discord.gg/7uxtbHd3Gt',
            },
            {
              label: 'L\'île Technologique',
              href: 'https://discord.gg/UvQfUbk',
            }
          ],
        },
		{
          title: 'Illustrations',
          items: [
			{
              label: 'Designed by stories / Freepik',
              href: 'http://www.freepik.com/search?file_type=svg&format=search&last_filter=query&last_value=%40stories&query=%40stories',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ClappyCrew. Built with ❤️ and Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
