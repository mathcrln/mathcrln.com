import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ParsedUrlQuery } from 'querystring';
import { getAllProjectsSlugs, getProjectBySlug } from '@/projects/graphql/projects';
import Page from '@/common/components/layout/Page';
import SingleProjectLayout, { ProjectProps } from '@/projects/layouts/SingleProjectLayout';
import { IProject } from '@/projects/models/projects';

export default function ProjectPage({ project, source }: ProjectProps): JSX.Element {
	return (
		<Page
			seo={{
				title: project ? project.name : 'Project',
				description: project ? project.description : 'Here is a fun project I played with.',
			}}
		>
			{!project && <p className='relative my-14'>Seems like no project with this name has been found</p>}
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
