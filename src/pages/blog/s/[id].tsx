import PageHeader from '@/components/common/PageHeader';
import Page from '@/layout/Page';
import { useRouter } from 'next/dist/client/router';
import useSWR from 'swr';
import 'prismjs/themes/prism-tomorrow.css';
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css';
import { NotionRenderer } from 'react-notion-x';

const fetcher = (url: string) =>
	fetch(url)
		.then((res) => {
			if (res.status > 300) {
				throw new Error('Server error');
			} else {
				return res.json();
			}
		})
		.catch((err) => {
			throw err;
		});

export default function Project(): JSX.Element {
	const router = useRouter();
	const { id } = router.query;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { data, error } = useSWR(`/api/posts/${id}`, fetcher);

	return (
		<Page title='Dynamic' description='Page'>
			<PageHeader title={(data && data.title) || ' '} />
			{/* Page id: {id} */}
			{data && <NotionRenderer recordMap={data.recordMap} showTableOfContents darkMode />}
		</Page>
	);
}
