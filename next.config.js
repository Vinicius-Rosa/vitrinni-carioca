const withImages = require('next-images')

module.exports =
    withImages({
        inlineImageLimit: false,
        fileExtensions: ["jpg", "jpeg", "png", "gif"],
        webpack(config) {
            config.module.rules.push({
                test: /\.svg$/,
                issuer: {
                    test: /\.(js|ts)x?$/,
                },
                use: ['@svgr/webpack'],
            });

            return config;
        },
    })