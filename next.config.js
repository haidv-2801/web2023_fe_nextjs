/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	experimental: {
		appDir: true,
		serverActions: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: [
			'images.unsplash.com',
			'tailwindui.com',
			'localhost',
			'flowbite.com',
			'images.unsplash.com',
			'0.0.0.0',
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	typescript: {},
	async headers() {
		return [];
	},
	async redirects() {
		return [];
	},
	async rewrites() {
		return [
			// {
			// 	source: '/gioi-thieu',
			// 	destination: '/vi/gioi-thieu',
			// },
			// {
			// 	source: '/lien-he',
			// 	destination: '/vi/lien-he',
			// },
			// {
			// 	source: '/vi',
			// 	destination: '/',
			// },
		];
	},
};

module.exports = nextConfig;
