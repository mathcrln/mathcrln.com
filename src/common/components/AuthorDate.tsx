import { format, parseISO } from 'date-fns';
import Image from 'next/legacy/image';

export default function AuthorDate({ date }: { date: string }): JSX.Element {
	return (
		<div className='flex items-center'>
			<Image alt='Mathieu Céraline' height={24} width={24} src='/avatar.jpg' className='rounded-full' />
			<span className='ml-2'>
				<strong>Mathieu Céraline</strong> •{' '}
				<span className='text-gray-400'>{format(parseISO(date), 'MMMM dd, yyyy')}</span>
			</span>
		</div>
	);
}
