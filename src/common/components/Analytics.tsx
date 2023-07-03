import Script from 'next/script';

export default function Analytics(): JSX.Element {
	return (
		<Script
			src='https://beamanalytics.b-cdn.net/beam.min.js'
			data-token={process.env.NEXT_PUBLIC_BEAM_ANALYTICS_TOKEN}
			async
		/>
	);
}
