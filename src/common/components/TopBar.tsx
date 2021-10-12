import ArrowRight from '@/common/components/icons/ArrowRight';
import CustomLink from '@/common/components/elements/Link';

export default function TopBar(): JSX.Element {
	return (
		<div className='bg-gray-100 dark:bg-gray-900 dark:bg-white-100 text-center pt-5 py-3  rounded-b-xl relative mb-4'>
			<p className='mx-4'>
				<span className='mr-2'>
					<span role='img' aria-label='waving hand' className='mr-4'>
						👋🏾
					</span>
					<strong className='text-primary-light dark:text-primary-dark'>Beta:</strong> My personal website development
					is currently in progress.
				</span>
				<CustomLink href='/log' className='inline-block group'>
					See changelog <ArrowRight className='transform group-hover:-rotate-45 duration-200 inline ease-in-out' />
				</CustomLink>
			</p>
			{/* <button className='my-3 lg:absolute right-4 top-0 border border-solid dark:border-white border-primary-light  px-2 rounded border-opacity-20 hover:bg-white dark:hover:text-darkGrey'>
				Hide
			</button> */}
		</div>
	);
}
