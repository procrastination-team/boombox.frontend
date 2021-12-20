/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    SPOTIFY_DEVELOPER_CLIENT_ID: process.env.SPOTIFY_DEVELOPER_CLIENT_ID,
    YANDEX_MUSIC_DEVELOPER_CLIENT_ID: process.env.YANDEX_MUSIC_DEVELOPER_CLIENT_ID,
    API_URL: process.env.API_URL,
  }
}
