import { IProjectCard } from '@/projects/models/projects';
import Skill, { ISkill } from '@/common/components/skills/Skill';

export default function ProjectMetadata({ project, className }: { project: IProjectCard; className?: string }): JSX.Element {
	return (
		<div className={`space-y-5 ${className}`}>
			<h2 className='text-3xl font-bold'>{project?.name}</h2>
			<p>{project?.description}</p>
			<div className='flex items-center space-x-4'>
				<span>Built with</span>
				{project.skills &&
					project?.skills?.map((skill: ISkill) => (
						<Skill key={skill?.name} skill={skill} className='flex items-center space-x-1' />
					))}
			</div>
		</div>
	);
}
