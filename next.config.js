const withNextIntl = require('next-intl/plugin')(
  // This is the default path to the i18n config
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
};

module.exports = withNextIntl(nextConfig);