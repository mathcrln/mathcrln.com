import { NextSeo } from 'next-seo';
// import { useRouter } from 'next/dist/client/router';
import Container from './Container';

type SEO = {
	title: string;
	slogan?: string;
	description?: string;
	image?: string;
	date?: string;
	type?: string;
	canonical?: string;
	noindex?: boolean;
	nofollow?: boolean;
	publishedTime?: string;
	modifiedTime?: string;
};
type IPage = {
	children: JSX.Element | JSX.Element[] | React.ReactNode;
	className?: string;
	seo: SEO;
};

export default function Page({ children, className, seo }: IPage): JSX.Element {
	// const router = useRouter();
	const pageTitle = seo.slogan ? `${seo.title} — ${seo.slogan}` : `${seo.title} — Mathieu Céraline`;
	const pageDescription = seo.description || `Front-end developer, Designer, Writer, and student at Polytechnique Montréal`;
	return (
		<main id='content' role='main'>
			<NextSeo
				title={pageTitle}
				description={pageDescription}
				canonical={seo.canonical}
				noindex={seo.noindex}
				nofollow={seo.nofollow}
				openGraph={{
					title: pageTitle,
					description: pageDescription,
					images: [
						{
							url: seo.image || 'https://mathcrln.com/mathieu.jpg',
							width: 800,
							height: 600,
							alt: seo.title || 'Mathieu Céraline',
							type: 'image/jpeg',
						},
					],
					type: seo.type || 'website',
					article: {
						authors: ['Mathieu Céraline'],
						publishedTime: seo.publishedTime,
						modifiedTime: seo.modifiedTime,
					},
				}}
				twitter={{
					cardType: 'summary_large_image',
				}}
			/>
			<Container className={`my-14 ${className || ''}`}>{children}</Container>
		</main>
	);
}
