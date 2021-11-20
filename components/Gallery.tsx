/* eslint-disable @next/next/no-img-element */
export default function Gallery({ images, cols = 4 }: { images: { slug: string; alt?: string }[]; cols?: number }): JSX.Element {
	let colsStyles: string;
	switch (cols) {
		case 2:
			colsStyles = 'md:grid-cols-2';
			break;
		case 3:
			colsStyles = 'md:grid-cols-3';
			break;
		case 4:
			colsStyles = 'md:grid-cols-4';
			break;
		default:
			colsStyles = 'grid-cols-4';
			break;
	}
	return (
		<div className={`grid grid-cols-2 gap-10 ${colsStyles} md:gap-5 my-10`}>
			{images.map(({ slug, alt }) => (
				<img key={slug} src={slug} alt={alt} className='rounded' title={alt} />
			))}
		</div>
	);
}
