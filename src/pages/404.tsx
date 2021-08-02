import { LinkButton } from '@/components/shared/Button';
import PageHeader from '@/components/shared/PageHeader';
import Page from '@/layout/Page';

export default function Page404(): JSX.Element {
	return (
		<Page title='Not found'>
			<PageHeader title='404 — Not found' intro="Oops, it seems like you're not in the right place." className='mb-10' />
			<LinkButton url='/' title='Go home' />
		</Page>
	);
}
