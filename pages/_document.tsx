import { GA_TRACKING_ID } from 'lib/google-analytics';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang='en' className='h-full'>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
					<link
						href='https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,500&display=swap'
						rel='stylesheet'
					/>

					{/* Global Site Tag (gtag.js) - Google Analytics */}
					{process.env.NODE_ENV === 'production' && (
						<>
							<script async data-api='/_hive' src='/bee.js' />

							<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
							<script
								// eslint-disable-next-line react/no-danger
								dangerouslySetInnerHTML={{
									__html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_TRACKING_ID}', {
                                    page_path: window.location.pathname,
                                });
                            `,
								}}
							/>
							<script defer data-domain='mathcrln.com' src='/lib/plausible.js' />
						</>
					)}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
