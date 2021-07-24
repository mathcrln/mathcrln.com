import Image from 'next/image';

export default function BookCard({ book }: { book: any }): JSX.Element {
	const { title, author } = book;

	return (
		<div className=' max-w-max m-auto'>
			<div className='rounded-lg shadow-lg' style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.68)' }}>
				<Image src='/book-sample.jpg' alt='' height={454} width={301} className='rounded-lg ' />
				{/* <img src='/book-sample.jpg' alt='' className='rounded-lg shadow-lg' /> */}
				{/* <div
        className='h-96  bg-primary-light rounded-lg shadow-lg'
        style={{
            backgroundImage: 'url(https://source.unsplash.com/450x222/?book)',
            backgroundSize: 'cover',
        }}
    /> */}
			</div>
			<h3 className='mt-5 font-bold text-md'>{title}</h3>
			<p>{author}</p>
		</div>
	);
}
