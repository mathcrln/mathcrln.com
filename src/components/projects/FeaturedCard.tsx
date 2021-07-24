import Image from 'next/dist/client/image';
import { IProjectCard } from './types/project.type';

export default function FeaturedCard({ featured }: { featured: IProjectCard }): JSX.Element {
	return (
		<div className='grid lg:grid-cols-[2fr,1fr] gap-10'>
			<div
				className=' h-80 rounded-lg relative bg-no-repeat bg-cover'
				style={{ backgroundImage: `url(${featured?.cover?.url})` }}
			>
				<div className='absolute bottom-3 left-3 text-white bg-gray-900 px-5 py-2 rounded-lg'>Featured</div>
			</div>
			<div className='text-center space-y-5'>
				<h2 className='text-3xl font-bold'>{featured?.name}</h2>
				<p>{featured?.description}</p>
				<div className='flex space-x-6 items-center justify-center'>
					{featured.skills &&
						featured?.skills?.map((skill) => (
							<div key={skill?.name} className='flex items-center space-x-1'>
								<Image src={skill.icon.url} height={18} width={18} layout='fixed' alt={skill.name} />
								<span>{skill?.name}</span>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
