export default function YouTubePlayer({ id }: { id: string }): JSX.Element {
	return (
		<div style={{ aspectRatio: '16/9' }} className='my-10'>
			<iframe
				title='YouTube video player'
				src={`https://www.youtube-nocookie.com/embed/${id}`}
				className='w-full ml-auto h-full'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			/>
		</div>
	);
}
