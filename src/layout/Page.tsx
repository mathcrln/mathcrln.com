import { NextSeo } from 'next-seo';
import { useRouter } from 'next/dist/client/router';
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
	const router = useRouter();

	return (
		<main id='content' role='main'>
			<NextSeo
				title={seo.slogan ? `${seo.title} — ${seo.slogan}` : `${seo.title} — Mathieu Céraline`}
				description={seo.description || `Front-end developer, Designer, Writer, and student at Polytechnique Montréal`}
				canonical={seo.canonical}
				noindex={seo.noindex}
				nofollow={seo.nofollow}
				openGraph={{
					title: seo.title,
					description: seo.description,
					images: [
						{
							url: seo.image || '/mathieu.jpg',
							width: 800,
							height: 600,
							alt: '',
							type: 'image/jpeg',
						},
					],
					url: `https://mathieuceraline.com${router.asPath}`,
					type: seo.type || 'website',
					article: {
						publishedTime: seo.publishedTime,
						modifiedTime: seo.modifiedTime,
					},
				}}
			/>
			<Container className={`my-14 ${className || ''}`}>{children}</Container>
		</main>
	);
}
