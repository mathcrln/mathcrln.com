import { LinkButton } from 'components/elements/Button';
import PageHeader from 'components/PageHeader';
import Page from '@/components/layout/Page';

export default function Page404(): JSX.Element {
	return (
		<Page
			seo={{
				title: 'Not Found',
				description: "Maybe this page holds a treasure, but we couldn't find it :(.",
				noindex: true,
				nofollow: true,
			}}
		>
			<PageHeader title='404 — Not found' className='mb-10'>
				<p>Oops, it seems like you're not in the right place.</p>
			</PageHeader>
			<LinkButton url='/' title='Go home' />
		</Page>
	);
}
