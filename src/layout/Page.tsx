import { useRouter } from 'next/dist/client/router';
import SEO, { CustomMeta } from '@/components/shared/Seo';
import Container from './Container';

type IPage = CustomMeta & {
	children: JSX.Element | JSX.Element[];
	className?: string;
};

export default function Page({ children, className, title, slogan, description, image, type }: IPage): JSX.Element {
	const router = useRouter();

	const meta = {
		title: slogan ? `${title} — ${slogan}` : `${title} — Mathieu Céraline`,
		description: description || `Front-end developer, Designer, Writer, and student at Polytechnique Montréal`,
		image: image || 'https://mathcrln.com/static/images/banner.png',
		type: type || 'website',
		favicon: '/favicon.ico',
		url: `https://mathcrln.com${router.asPath}`,
		date: '',
		robots: 'noindex, nofollow',
		twitter: '@mathcrln',
	};

	return (
		<main id='content' role='main'>
			<SEO meta={meta} />
			<Container className={`my-14 ${className || ''}`}>{children}</Container>
		</main>
	);
}
