import PageHeader from '@/components/common/PageHeader';
import Page from '@/layout/Page';
import React from 'react';

export default function ChangeLog(): JSX.Element {
	return (
		<Page
			title='Changelog'
			description='Changelog of all new and updated features and developments on this personal website.'
		>
			<PageHeader title='Changelog'>
				<p>Here is what changed around my personal website lately.</p>
			</PageHeader>
			<section className='my-16'>
				<div className='border-primary-light dark:border-primary-dark border-l-4 border-solid px-6'>
					<h2 className='text-xl font-bold bg-primary-light text-white dark:bg-primary-dark w-max px-4 py-2 ml-[-1.7rem] rounded'>
						2021
					</h2>

					<div className='my-12'>
						<h2 className='font-bold text-xl relative before:absolute before:left-[-2.35rem] before:bg-primary-light before:border-white before:border-4 dark:before:border-darkGrey dark:before:bg-primary-dark before:border-solid before:w-6 before:h-6 before:rounded-full'>
							Week #37, Sept. 13-19th
						</h2>
						<ul className='border-l border-solid border-white border-opacity-20 ml-1 my-2 py-3 px-4 space-y-2'>
							<li className='list-disc ml-[-2px]'>Added disclaimer message banner (topbar)</li>
							<li className='list-disc ml-[-2px]'>Added changelog page, started history.</li>
						</ul>
					</div>
					<p className='text-gray-400 italic relative before:absolute before:left-[-2rem] before:bottom-0 before:bg-primary-light dark:before:bg-primary-dark before:border-primary-light dark:before:border-primary-dark before:border-solid before:border before:w-3 before:h-3 align-baseline leading-none'>
						That's the end of the line!
						<span role='img' aria-label='Finish flag' className='ml-2'>
							🏁
						</span>
					</p>
				</div>
			</section>
		</Page>
	);
}
