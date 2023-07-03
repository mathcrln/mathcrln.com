import Image from 'next/legacy/image';
import Link from 'next/link';
import Twitter from '@/common/components/icons/Twitter';

export default function Author(): JSX.Element {
	return (
		<div className='flex items-center '>
			<Image alt='Mathieu Céraline' height={24} width={24} src='/avatar.jpg' className='rounded-full' />
			<Link href='/about' passHref>
				<span className='ml-2 text-lg hover:underline'>Mathieu Céraline</span>
			</Link>
			<a href='https://twitter.com/mathcrln' target='_blank' rel='noreferrer'>
				<Twitter className='mx-3 inline h-[22px] w-[22px] transform duration-200 ease-in-out hover:rotate-12 hover:text-primary-light dark:hover:text-primary-dark' />
			</a>
			{/* <a href='https://github.com/mathcrln' target='_blank' rel='noreferrer'>
            <Github className='w-[22px] h-[22px] mx-3 hover:text-primary-light text-white dark:hover:text-primary-dark transform hover:rotate-12 duration-200 inline ease-in-out' />
        </a> */}
		</div>
	);
}
