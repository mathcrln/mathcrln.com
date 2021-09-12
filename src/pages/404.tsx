import { LinkButton } from '@/components/common/Button';
import PageHeader from '@/components/common/PageHeader';
import Page from '@/layout/Page';

export default function Page404(): JSX.Element {
	return (
		<Page title='Not found'>
			<PageHeader title='404 — Not found' className='mb-10'>
				<p>Oops, it seems like you're not in the right place.</p>
			</PageHeader>
			<LinkButton url='/' title='Go home' />
		</Page>
	);
}
