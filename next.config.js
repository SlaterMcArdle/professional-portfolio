const path = require('path')

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