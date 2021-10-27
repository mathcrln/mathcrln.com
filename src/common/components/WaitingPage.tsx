import Page from '@/layout/Page';
import Image from 'next/image';
import React from 'react';
import PageHeader from './PageHeader';

export default function WaitingPage({
	title = 'In Progress...',
	description,
}: {
	title: string;
	description?: string;
}): JSX.Element {
	return (
		<Page title={title} description={description}>
			<PageHeader title='Work in progres... 🧰' centered>
				<p>I'm still working on this page, what if you came back later?</p>
			</PageHeader>
			<div className='block mx-auto mt-10 text-center'>
				<Image
					src='/earth-closed.gif'
					width={536}
					height={460}
					alt="Iron-Man saying 'Earth is closed today'"
					className='rounded-lg'
				/>
			</div>
		</Page>
	);
}
