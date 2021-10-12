import Link from 'next/dist/client/link';
import Github from '@/common/components/icons/Github';
import CustomLink from '@/common/components/elements/Link';
import ImageCard from '@/common/components/ImageCard';
import { IProjectCard } from '../models/projects';

export default function ProjectCard({ project }: { project: IProjectCard }): JSX.Element {
	const { name, cover, slug, tags } = project;
	const url = `/projects/${slug}`;

	return (
		<article>
			<Link href={url} passHref>
				<a>
					<ImageCard cover={cover} tags={tags} />
				</a>
			</Link>
			<div className='mt-5'>
				<h3 className='font-bold mt-4 text-xl  dark:hover:text-primary-dark'>
					<Link href={`/projects/${slug}`}>{name}</Link>
				</h3>
				<div className='mt-3 flex space-x-5'>
					<CustomLink href='/log' className='flex items-center group'>
						Demo
						<svg
							version='1.0'
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 100 100'
							className='ml-2 h-[20px] w-[20px] fill-current transform group-hover:rotate-12 duration-200 inline ease-in-out'
						>
							<path d='M89.796 39.335c-1.357-5.09-9.375-7.754-20.476-7.668-4.85-5.127-11.702-8.334-19.319-8.334-12.585 0-23.108 8.734-25.911 20.463.003-.004 0-.008 0-.008-9.648 5.473-15.248 11.785-13.887 16.869 1.367 5.094 9.388 7.764 20.494 7.672 4.851 5.121 11.693 8.338 19.304 8.338 12.581 0 23.105-8.734 25.911-20.459 9.646-5.473 15.248-11.785 13.884-16.873zM52.221 58.29c-18.313 4.906-34.153 5.176-35.384.596-.554-2.063 1.973-4.756 6.569-7.541 0-.01.02-.02.022-.029.104 1.963.374 3.879.876 5.713.807.07 1.764.127 2.955.127 6.283 0 14.909-1.348 23.666-3.695 12.471-3.34 20.843-7.455 24.844-10.215a26.571 26.571 0 0 0-2.094-5.416c.007.012.026.025.033.039 5.371.113 8.906 1.184 9.456 3.244 1.229 4.579-12.629 12.273-30.943 17.177z' />
						</svg>
					</CustomLink>
					<CustomLink href='/log' className='flex items-center group'>
						Browse Code{' '}
						<Github className='ml-2 h-[20px] w-[20px] transform group-hover:rotate-12 duration-200 inline ease-in-out' />
					</CustomLink>
				</div>
			</div>
		</article>
	);
}
