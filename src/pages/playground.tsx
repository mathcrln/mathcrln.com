import Head from 'next/head';
import Container from '@/layout/Container';
import { IProjectCard } from 'src/types/projects';
import { FEATURED_PROJECT, PROJECTS_EXCEPT_LAST } from '@/graphql/queries/projects';
import client from '@/graphql/apollo-client';
import FeaturedProjectCard from '@/components/projects/FeaturedProjectCard';
import ProjectGrid from '@/components/projects/ProjectGrid';
import PageHeader from '@/components/shared/PageHeader';

export default function Playground({
	featured,
	allProjects,
}: {
	featured: IProjectCard | null;
	allProjects: IProjectCard[];
}): JSX.Element {
	return (
		<div>
			<Head>
				<title>Playground | Mathieu Céraline</title>
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
				<main className='my-20'>
					{featured && <FeaturedProjectCard featured={featured} />}
					{allProjects && <ProjectGrid projects={allProjects} />}
				</main>
			</Container>
		</div>
	);
}

export async function getStaticProps(): Promise<any> {
	const featured = await client.query({ query: FEATURED_PROJECT });
	const allProjects = await client.query({ query: PROJECTS_EXCEPT_LAST });

	return {
		props: {
			allProjects: allProjects.data.projects,
			featured: featured.data.projects[0],
			revalidate: 10,
		},
	};
}
