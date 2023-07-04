import uuid from 'react-uuid';
import LinkWrapper from './elements/LinkWrapper';

/* eslint-disable @next/next/no-img-element */
export default function Gallery({
	images,
	cols = 4,
}: {
	images: {
		slug: string;
		alt?: string;
		rowsSpan?: number;
		colsSpan?: number;
		linkURL?: string;
	}[];
	cols?: number;
}): JSX.Element {
	return (
		<div className={`grid grid-cols-2 gap-5 ${getCols(cols)} my-10 items-stretch justify-center md:gap-5`}>
			{images.map(({ slug, alt, rowsSpan, colsSpan, linkURL }) => (
				<span key={uuid()}>
					{linkURL && (
						<LinkWrapper href={linkURL as string}>
							<img
								src={slug}
								alt={alt}
								className={`rounded ${getRowsSpan(rowsSpan)} ${getColsSpan(colsSpan)} place-self-auto`}
								title={alt}
							/>
						</LinkWrapper>
					)}
					{!linkURL && (
						<img
							src={slug}
							alt={alt}
							className={`rounded ${getRowsSpan(rowsSpan)} ${getColsSpan(colsSpan)} place-self-auto`}
							title={alt}
						/>
					)}
				</span>
			))}
		</div>
	);
}

function getCols(cols: number | undefined): string {
	switch (cols) {
		case 2:
			return 'md:grid-cols-2';
		case 3:
			return 'md:grid-cols-3';
		case 4:
			return 'md:grid-cols-4';
		case 5:
			return 'md:grid-cols-5';
		case 6:
			return 'md:grid-cols-6';
		default:
			return 'md:grid-cols-4';
	}
}

function getRowsSpan(rowsSpan: number | undefined): string {
	switch (rowsSpan) {
		case 1:
			return 'row-span-1';
		case 2:
			return 'row-span-2';
		case 3:
			return 'row-span-3';
		case 4:
			return 'row-span-4';
		default:
			return '';
	}
}
function getColsSpan(colsSpan: number | undefined): string {
	switch (colsSpan) {
		case 1:
			return 'col-span-1';
		case 2:
			return 'col-span-2';
		case 3:
			return 'col-span-3';
		case 4:
			return 'col-span-4';
		default:
			return '';
	}
}
