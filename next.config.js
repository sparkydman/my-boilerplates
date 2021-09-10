module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    LOCAL_WEB_URL: 'http://localhost:3000',
    LIVE_WEB_URL: '',
    LOCAL_API_URL: 'http://localhost:8080',
    LIVE_API_URL: '',
    CLOUDINARY_NAME: 'ucontex',
  },
  images: {
    domains: [
      'blob:http://localhost:3000',
      'http://localhost:3000',
      'https://ucontex.com',
      '',
    ],
  },
};
