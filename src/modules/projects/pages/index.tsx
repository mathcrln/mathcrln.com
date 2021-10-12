import { GetStaticProps } from 'next';
import { IProjectCard } from '@/modules/projects/models/projects';
import { getProjectsCards } from '@/modules/projects/graphql/projects';
import FeaturedProjectCard from '@/modules/projects/components/FeaturedProjectCard';
import ProjectGrid from '@/modules/projects/components/ProjectGrid';
import PageHeader from 'src/common/components/PageHeader';
import Page from '@/layout/Page';

type ProjectsProps = { projects: IProjectCard[] };

export default function Projects({ projects }: ProjectsProps): JSX.Element {
	return (
		<Page
			title='Projects'
			description="Here are all the projects I've been working on lately, in frontend development, software engineering, design, but not only."
			image=''
		>
			<PageHeader title='Projects'>
				<p>
					I like to play, to experiment and discover new things and technologies. <br className='hidden md:inline' />
					If you’re curious, here are a few project I worked on recently.
				</p>
			</PageHeader>

			<main className='my-20 space-y-16'>
				{projects.length > 0 && <FeaturedProjectCard project={projects[0]} />}
				{projects.length > 1 && <ProjectGrid projects={projects.slice(1)} />}
			</main>
		</Page>
	);
}

export const getStaticProps: GetStaticProps<ProjectsProps & { revalidate: number }> = async () => {
	const projects: IProjectCard[] = await getProjectsCards(7);

	return {
		props: {
			projects,
			revalidate: 60,
		},
	};
};