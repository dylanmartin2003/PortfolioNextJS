/*@type {import('next').NextConfig}*/

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX;

const config = {
    output: 'export',
    trailingSlash: false,
    distDir: 'out',
    reactStrictMode: true,
    assetPrefix,
    basePath,
    images:{
        unoptimized: true,
    }
};

export default config;