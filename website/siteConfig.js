/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Learning and Support Docs', // Title for your website.
  tagline: '5th Kind Learning and Support Docs',
  url: 'https://jonsanjuan.gibhub.io', // Your website URL
  baseUrl: '/5khelpdocs/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: '5khelpdocs',
  organizationName: 'jonsanjuan',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
      {href: '../files/5thKindHelpDocs.pdf', label: 'View as PDF'}
    // {doc: 'doc1', label: 'Docs'},
    // {doc: 'doc4', label: 'API'},
    // {page: 'help', label: 'Help'},
    // {blog: true, label: 'Blog'},
  ],
  
  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logos/logo2013onblack.png',
  // footerIcon: 'img/docusaurus.svg',
  favicon: 'img/5kfavicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#151921',
    secondaryColor: '#59b0e1',
  },


  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' 5th Kind',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
      // '/scripts/html2pdf.bundle.min.js',
  ],

  // stylesheets: ['/static/font-awesome-4.7.0/css/font-awesome.css'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  // ogImage: 'img/docusaurus.png',
  // twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
