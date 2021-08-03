import Image from 'next/dist/client/image';

export default function ImageCard({
	cover,
	className = 'h-64',
	height,
	width,
	tags = [],
}: {
	cover: { url: string };
	className?: string;
	height?: number;
	width?: number;
	tags?: { name: string }[];
}): JSX.Element {
	return (
		<div
			className={`rounded-md relative duration-1000 hover:-translate-y-1 hover:scale-[1.025] dark:filter dark:brightness-75 dark:hover:brightness-90 ${className} `}
		>
			{!height && !width && (
				<Image
					src={cover?.url}
					alt=''
					layout='fill'
					objectFit='cover'
					className='rounded-lg'
					placeholder='blur'
					blurDataURL='data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoEAAMAAUAmJQBOgCHfwHHAAP7zZ0/8d0eL45D5Nm2VMQtDFHTlkgND5P3RFAhPRa7wrzvvmAAAAA=='
				/>
			)}

			{height && width && (
				<Image
					src={cover?.url}
					alt=''
					height={height}
					width={width}
					objectFit='cover'
					className='rounded-lg'
					placeholder='blur'
					blurDataURL='data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoEAAMAAUAmJZwCdAEO+KeoAADOP/6Huzkl0B/017+Gyofm+qb11/CcKS9dCAAA'
				/>
			)}

			{tags.length > 0 && (
				<div className='absolute bottom-3 left-3 flex space-x-2'>
					{tags.map((tag) => (
						<div key={tag.name} className='text-white bg-gray-900 px-5 py-2 rounded-lg'>
							{tag.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
