// This component is used in multiple posts in the CMS. Do not modify the API without taking that into account.

export default function YouTubePlayer({ id }: { id: string }): JSX.Element {
	return (
		<div style={{ aspectRatio: '16/9' }} className='my-10'>
			<iframe
				title='YouTube video player'
				src={`https://www.youtube-nocookie.com/embed/${id}`}
				className='ml-auto h-full w-full'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			/>
		</div>
	);
}
