import Head from 'next/head';

export type CustomMeta = {
	title: string;
	slogan?: string;
	description?: string;
	image?: string;
	date?: string;
	type?: string;
};

type Meta = CustomMeta & {
	title: string;
	description: string;
	favicon: string;
	image: string;
	date: string;
	type: string;
	url: string;
	robots: string;
	twitter: string;
};

export default function SEO({ meta }: { meta: Meta }): JSX.Element {
	return (
		<Head>
			<title>{meta.title}</title>
			<meta name='robots' content={meta.robots} />
			<meta name='description' content={meta.description} />
			<meta property='og:url' content={meta.url} />
			<link rel='canonical' href={meta.url} />
			<meta property='og:type' content={meta.type} />
			<meta property='og:site_name' content='Mathieu Céraline' />
			<meta property='og:description' content={meta.description} />
			<meta property='og:title' content={meta.title} />
			<meta property='og:image' content={meta.image} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content={meta.twitter} />
			<meta name='twitter:title' content={meta.title} />
			<meta name='twitter:description' content={meta.description} />
			<meta name='twitter:image' content={meta.image} />
			<link rel='icon' href={meta.favicon} />
			{meta.date && <meta property='article:published_time' content={meta.date} />}
		</Head>
	);
}
