import { LinkButton } from '@/common/components/elements/Button';
import PageHeader from '@/common/components/PageHeader';
import Page from '@/layout/Page';

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
