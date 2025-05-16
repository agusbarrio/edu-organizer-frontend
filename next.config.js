/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public', // acá se guarda el service worker
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: false,
});
