/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
