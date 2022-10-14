const path = require('path')

    /**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: './',
  };
  
  export default   nextConfig;
  
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    optimizeFonts: false,
    distDir: 'build',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{loader: '@svgr/webpack', options: { icon: true}}],
        });

        return config;
    }
}