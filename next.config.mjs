/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.figma.com',
                port: '',
                search: '',
            },
        ],
    }
};

export default nextConfig;
