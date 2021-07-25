import Image from 'next/dist/client/image';
import { IProjectCard } from 'src/types/projects';

export default function ProjectMetadata({ project, className }: { project: IProjectCard; className?: string }): JSX.Element {
	return (
		<div className={`space-y-5 ${className}`}>
			<h2 className='text-3xl font-bold'>{project?.name}</h2>
			<p>{project?.description}</p>
			<div className='flex space-x-6 items-center justify-center'>
				{project.skills &&
					project?.skills?.map((skill: any) => (
						<div key={skill?.name} className='flex items-center space-x-1'>
							<Image src={skill.icon.url} height={18} width={18} layout='fixed' alt={skill.name} />
							<span>{skill?.name}</span>
						</div>
					))}
			</div>
		</div>
	);
}
