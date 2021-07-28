import ProjectCard from './ProjectCard';
import { IProjectCard } from '../../types/projects';

export default function ProjectGrid({ projects }: { projects: IProjectCard[] }): JSX.Element {
	return (
		<div className='mt-16 grid md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,1fr] gap-20 md:gap-10 lg:gap-14 xl:gap-24'>
			{projects?.map((project: IProjectCard) => (
				<ProjectCard key={project.name} project={project} />
			))}
		</div>
	);
}
