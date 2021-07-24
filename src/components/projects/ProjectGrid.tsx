import ProjectCard from './ProjectCard';
import { IProjectCard } from './types/project.type';

export default function ProjectGrid({ projects }: { projects: IProjectCard[] }): JSX.Element {
	return (
		<div className=' mt-16 grid lg:grid-cols-[1fr,1fr,1fr] gap-16'>
			{projects?.map((project: IProjectCard) => (
				<ProjectCard key={project.name} project={project} />
			))}
		</div>
	);
}
