'use strict';

// ===================
// Contact Data
// ===================
const contacts = [
  {
    icon: 'mail-outline',
    title: 'Email',
    value: 'gmail.com',
    href: 'mailto:jacob.hsu.tw@gmail.com',
    isLink: true
  },
  {
    icon: 'location-outline',
    title: 'Location',
    value: 'Taiwan',
    isLink: false
  }
];

// ===================
// Service Data
// ===================
const services = [
  {
    icon: './assets/images/icon-design.svg',
    title: 'Web development',
    text: 'The most modern and high-quality design made at a professional level.'
  },
  {
    icon: './assets/images/icon-dev.svg',
    title: 'Web development',
    text: 'High-quality development of sites at the professional level.'
  }
];

// ===================
// Project Data
// ===================
const projects = [
  {
    title: 'Finance',
    href: 'https://vue3-admin-dun.vercel.app/',
    img: './assets/images/project-1.png',
    category: 'web development'
  },
  {
    title: 'Metro Taipei Night Markets',
    href: 'https://jacobhsu.github.io/metro_taipei_night_markets/',
    img: './assets/images/project-2.png',
    category: 'web development'
  },
  {
    title: 'MLB Map',
    href: 'https://jacobhsu.github.io/team_map/',
    img: './assets/images/project-3.png',
    category: 'web development'
  },
  {
    title: 'Cryptocurrency Analysis Report',
    href: 'https://github.com/JacobHsu/py-binance-api',
    img: './assets/images/project-4.png',
    category: 'web development'
  },
  {
    title: 'Tradingview Widgets',
    href: 'https://jacobhsu.github.io/tradingview-widgets/',
    img: './assets/images/project-5.png',
    category: 'web development'
  },
  {
    title: 'NBA Map',
    href: 'https://jacobhsu.github.io/team_map/NBA',
    img: './assets/images/project-6.png',
    category: 'web development'
  },
  {
    title: 'OpenStock',
    href: 'https://next-open-stock.vercel.app/',
    img: './assets/images/project-7.png',
    category: 'web development'
  },
  {
    title: 'Crypto Watch',
    href: 'https://jacobhsu.github.io/crypto-watch/',
    img: './assets/images/project-8.jpg',
    category: 'web development'
  },
  {
    title: 'World Stock',
    href: 'https://jacobhsu.github.io/stock-world-map',
    img: './assets/images/project-9.png',
    category: 'web development'
  },
  {
    title: 'TWstock Chrome Extension',
    href: 'https://github.com/JacobHsu/twstock_chrome_extensions/',
    img: './assets/images/project-10.png',
    category: 'extensions'
  },
  {
    title: 'AI Tools',
    href: 'https://ai-tools-bookmark.vercel.app/',
    img: './assets/images/project-11.png',
    category: 'web development'
  },
  {
    title: 'Altfins Widgets',
    href: 'https://jacobhsu.github.io/altfins-widgets/',
    img: './assets/images/project-12.png',
    category: 'web development'
  },
];

// ===================
// Filter Categories (derived from projects)
// ===================
const filterCategories = ['All', ...new Set(projects.map(p => p.category))];

// ===================
// Log/Blog Data
// ===================
const logs = [
  {
    title: 'Apps Onelink',
    href: 'https://apps-onelink.vercel.app/',
    img: './assets/images/log-1.png',
    category: 'Apps',
    text: 'Onelink is an experimental link-in-bio tool.'
  },
  {
    title: 'Movies TMDB',
    href: 'https://next-tmdb-api.vercel.app/',
    img: './assets/images/log-2.png',
    category: 'Movies',
    text: 'User database for movies and TV shows.'
  }
];

// ===================
// Navigation Data
// ===================
const navItems = ['About', 'Portfolio', 'Log'];
