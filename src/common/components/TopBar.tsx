import Arrow from '@/common/components/icons/Arrow';
import CustomLink from '@/common/components/elements/Link';

export default function TopBar(): JSX.Element {
	return (
		<div className='dark:bg-white-100 relative mb-4 rounded-b-xl bg-gray-100 py-3  pt-5 text-center dark:bg-gray-900'>
			<p className='mx-4'>
				<span className='mr-2'>
					<span role='img' aria-label='waving hand' className='mr-4'>
						👋🏾
					</span>
					<strong className='text-primary-light dark:text-primary-dark'>Beta:</strong> My personal website development
					is currently in progress.
				</span>
				<CustomLink href='/log' className='group inline-block'>
					See changelog <Arrow className='inline transform duration-200 ease-in-out group-hover:-rotate-45' />
				</CustomLink>
			</p>
			{/* <button className='my-3 lg:absolute right-4 top-0 border border-solid dark:border-white border-primary-light  px-2 rounded border-opacity-20 hover:bg-white dark:hover:text-darkGrey'>
				Hide
			</button> */}
		</div>
	);
}
