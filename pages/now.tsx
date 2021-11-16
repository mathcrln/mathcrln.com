import { GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import ContentArticle from '@/components/ContentArticle';
import Page from '@/components/layout/Page';
import PageHeader from '@/components/PageHeader';
import { getPageBySlug } from 'features/common/graphql/pages';
import relativeDate from 'relative-date';
import { IPage } from 'features/common/models/pages';

export default function Now({ page, source }: { page: IPage; source: MDXRemoteSerializeResult }): JSX.Element {
	return (
		<Page
			seo={{
				title: page.title,
				description: page.subtitle,
				type: 'article',
				modifiedTime: page.updatedAt || undefined,
			}}
		>
			<PageHeader title={page.title}>
				<p>{page.subtitle}</p>
			</PageHeader>
			<ContentArticle source={source} />
			<p className='text-gray-600 dark:text-gray-400'>Last updated: {relativeDate(new Date(page.updatedAt))}</p>
		</Page>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const page = await getPageBySlug('now');

	if (!page) {
		return {
			notFound: true,
		};
	}

	const source = await serialize(page.content);

	return {
		props: {
			page,
			source,
		},
		revalidate: 60,
	};
};
