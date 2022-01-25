import Page from '@/components/layout/Page';
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
		<Page
			seo={{
				title,
				description,
			}}
		>
			<PageHeader title='Work in progress... 🧰' centered>
				<p>I'm still working on this page, what if you came back later?</p>
			</PageHeader>
			<div className='mx-auto mt-10 block text-center'>
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
