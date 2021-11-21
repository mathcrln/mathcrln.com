/* eslint-disable @next/next/no-img-element */
export default function Gallery({
	images,
	cols = 4,
}: {
	images: { slug: string; alt?: string; rowsSpan?: number; colsSpan?: number }[];
	cols?: number;
}): JSX.Element {
	return (
		<div className={`grid grid-cols-2 gap-10 ${getCols(cols)} md:gap-5 my-10 items-center md:items-stretch justify-center`}>
			{images.map(({ slug, alt, rowsSpan, colsSpan }) => (
				<img
					key={slug}
					src={slug}
					alt={alt}
					className={`rounded ${getRowsSpan(rowsSpan)} ${getColsSpan(colsSpan)} `}
					title={alt}
				/>
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
