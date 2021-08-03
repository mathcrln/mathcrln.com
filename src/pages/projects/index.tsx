import { GetStaticProps } from 'next';
import { IProjectCard } from 'src/types/projects';
import { FEATURED_PROJECT, PROJECTS_EXCEPT_LAST } from '@/graphql/queries/projects';
import client from '@/graphql/apollo-client';
import FeaturedProjectCard from '@/components/projects/FeaturedProjectCard';
import ProjectGrid from '@/components/projects/ProjectGrid';
import PageHeader from '@/components/shared/PageHeader';
import Page from '@/layout/Page';

type ProjectsProps = { allProjects: IProjectCard[]; featured: IProjectCard };

export default function Projects({ featured, allProjects }: ProjectsProps): JSX.Element {
	return (
		<Page
			title='Projects'
			description="Here are all the projects I've been working on lately, in frontend development, software engineering, design, but not only."
			image=''
		>
			<PageHeader
				title='Projects'
				intro={
					<span>
						I like to play, to experiment and discover new things and technologies.{' '}
						<br className='hidden md:inline' />
						If you’re curious, here are a few project I worked on recently.
					</span>
				}
			/>
			<main className='my-20 space-y-16'>
				{featured && <FeaturedProjectCard featured={featured} />}
				{allProjects && <ProjectGrid projects={allProjects} />}
			</main>
		</Page>
	);
}

export const getStaticProps: GetStaticProps<ProjectsProps & { revalidate: number }> = async () => {
	const featured: IProjectCard = (await client.query({ query: FEATURED_PROJECT })).data.projects[0] || null;
	const allProjects: IProjectCard[] = (await client.query({ query: PROJECTS_EXCEPT_LAST })).data.projects || null;

	return {
		props: {
			allProjects,
			featured,
			revalidate: 60,
		},
	};
};
