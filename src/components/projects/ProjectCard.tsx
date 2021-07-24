import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';
import { IProjectCard } from './types/project.type';

export default function ProjectCard({ project }: { project: IProjectCard }): JSX.Element {
	const { name, description, cover, skills, slug, tags } = project;

	return (
		<div>
			<div className='rounded-lg relative bg-no-repeat bg-cover transition duration-1000 ease-in-out  transform hover:-translate-y-1 hover:scale-105 '>
				<Link href={`/playground/${slug}`} passHref>
					<a>
						<Image
							src={cover ? `${cover?.url}` : '/475x221.png'}
							layout='responsive'
							height={cover ? cover.height : 221}
							width={cover ? cover.width : 475}
							alt=''
							className='rounded-lg'
						/>
					</a>
				</Link>
				{tags && (
					<div className='absolute bottom-3 left-3 flex space-x-2'>
						{tags?.map((tag) => (
							<div className='bg-gray-900 px-5 py-2 rounded-lg text-white' key={tag.name}>
								{tag.name}
							</div>
						))}
					</div>
				)}
			</div>
			<div>
				<Link href={`/playground/${slug}`} passHref>
					<a>
						<h3 className='text-2xl mt-5 mb-2'>{name}</h3>
					</a>
				</Link>
				<p>{description}</p>
				<div className='mt-3 flex justify-start space-x-4 flex-wrap '>
					{skills?.map((skill) => (
						<div key={skill?.name} className='flex items-center space-x-1'>
							<Image src={skill.icon?.url} height={18} width={18} layout='fixed' alt={skill.name} />
							<span>{skill?.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
