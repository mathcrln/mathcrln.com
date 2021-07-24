import Link from 'next/dist/client/link';
// import Image from 'next/dist/client/image';
import { IProjectCard } from './types/project.type';

export default function ProjectCard({ project }: { project: IProjectCard }): JSX.Element {
	const { title, description, coverURL, slug, tags } = project;

	return (
		<Link href={`/playground/${slug}`} passHref>
			<a>
				<div
					className='h-64 rounded-lg relative bg-no-repeat bg-cover transition duration-1000 ease-in-out  transform hover:-translate-y-1 hover:scale-105 '
					style={{ backgroundImage: `url(${coverURL})` }}
				>
					{/* <Image src={coverURL} layout='fill' alt='' className='rounded-lg' /> */}

					{tags && (
						<div className='absolute bottom-3 left-3 flex space-x-2'>
							{tags?.map((tag) => (
								<>
									<div className='bg-gray-900 px-5 py-2 rounded-lg' key={tag}>
										{tag}
									</div>
								</>
							))}
						</div>
					)}
				</div>
				<div>
					<h3 className='text-2xl mt-5 mb-2'>{title}</h3>
					<p>{description}</p>
				</div>
			</a>
		</Link>
	);
}
