/** @type {import('next').NextConfig} */
const path = require("path");
const {
    NormalModuleReplacementPlugin
} = require("webpack");

const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'syedahmedhaidershah.com',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                pathname: '/**',
            },
        ],
    },
    webpack: (
        config, {
            buildId,
            dev,
            isServer,
            defaultLoaders,
            nextRuntime,
            webpack
        },
    ) => {
        config.plugins = config.plugins || []
        config.plugins.push(new NormalModuleReplacementPlugin(
            /email\/render/,
            path.resolve(__dirname, "./renderEmailFix.js"),
        ))
        // Important: return the modified config
        return config
    },
    output: 'export',
}

module.exports = nextConfig
