/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true,
			},
			{
				source: '/admin',
				destination: '/admin/login',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
