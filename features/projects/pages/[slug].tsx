import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ParsedUrlQuery } from 'querystring';
import { getAllProjectsSlugs, getProjectBySlug } from 'features/projects/graphql/projects';
import Page from '@/components/layout/Page';
import SingleProjectLayout, { ProjectProps } from 'features/projects/layouts/SingleProjectLayout';
import { IProject } from 'features/projects/models/projects';

export default function ProjectPage({ project, source }: ProjectProps): JSX.Element {
	return (
		<Page
			seo={{
				title: project ? project.name : 'Project',
				description: project ? project.description : 'Here is a fun project I played with.',
			}}
		>
			{!project && <p className='my-14 relative'>Seems like no project with this name has been found</p>}
			{project && <SingleProjectLayout project={project} source={source} />}
		</Page>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await getAllProjectsSlugs();

	return {
		paths: slugs,
		fallback: false,
	};
};

type Props = {
	project: IProject;
	source: MDXRemoteSerializeResult;
	revalidate: number;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { slug } = context.params as Params;
	const project = await getProjectBySlug(slug);
	const content = project?.content;
	const mdxSource = await serialize(content);

	return {
		props: {
			project,
			source: mdxSource,
			revalidate: 1,
		},
	};
};
