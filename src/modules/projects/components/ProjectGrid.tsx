import ProjectCard from './ProjectCard';
import { IProjectCard } from '../models/projects';

export default function ProjectGrid({ projects }: { projects: IProjectCard[] }): JSX.Element {
	return (
		<div className='grid md:grid-cols-[1fr,1fr]  gap-y-20 md:gap-x-10 '>
			{projects?.map((project: IProjectCard) => (
				<ProjectCard key={project.name} project={project} />
			))}
		</div>
	);
}
