import Image from 'next/dist/client/image';
import Link from 'next/link';
import Twitter from '@/common/components/icons/Twitter';

export default function Author(): JSX.Element {
	return (
		<div className='flex items-center '>
			<Image alt='Mathieu Céraline' height={24} width={24} src='/avatar.jpg' className='rounded-full' />
			<Link href='/about' passHref>
				<a>
					<span className='ml-2 text-lg hover:underline'>Mathieu Céraline</span>
				</a>
			</Link>
			<a href='https://twitter.com/mathcrln' target='_blank' rel='noreferrer'>
				<Twitter className='w-[22px] h-[22px] mx-3 hover:text-primary-light dark:hover:text-primary-dark transform hover:rotate-12 duration-200 inline ease-in-out' />
			</a>
			{/* <a href='https://github.com/mathcrln' target='_blank' rel='noreferrer'>
            <Github className='w-[22px] h-[22px] mx-3 hover:text-primary-light text-white dark:hover:text-primary-dark transform hover:rotate-12 duration-200 inline ease-in-out' />
        </a> */}
		</div>
	);
}
