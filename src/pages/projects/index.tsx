import Head from 'next/head';
import { GetStaticProps } from 'next';
import Container from '@/layout/Container';
import { IProjectCard } from 'src/types/projects';
import { FEATURED_PROJECT, PROJECTS_EXCEPT_LAST } from '@/graphql/queries/projects';
import client from '@/graphql/apollo-client';
import FeaturedProjectCard from '@/components/projects/FeaturedProjectCard';
import ProjectGrid from '@/components/projects/ProjectGrid';
import PageHeader from '@/components/shared/PageHeader';

type ProjectsProps = { allProjects: IProjectCard[]; featured: IProjectCard };

export default function Projects({ featured, allProjects }: ProjectsProps): JSX.Element {
	return (
		<div>
			<Head>
				<title>Playground | Mathieu Céraline</title>
				<meta name='description' content='The latest projects I played with.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container>
				<PageHeader
					title='Playground'
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
			</Container>
		</div>
	);
}

export const getStaticProps: GetStaticProps<ProjectsProps & { revalidate: number }> = async () => {
	const featured: IProjectCard = (await client.query({ query: FEATURED_PROJECT })).data.projects[0];
	const allProjects: IProjectCard[] = (await client.query({ query: PROJECTS_EXCEPT_LAST })).data.projects;

	return {
		props: {
			allProjects,
			featured,
			revalidate: 10,
		},
	};
};
