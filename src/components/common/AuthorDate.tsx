import { format, parseISO } from 'date-fns';
import Image from 'next/dist/client/image';

export default function AuthorDate({ date }: { date: string }): JSX.Element {
	return (
		<div className='flex items-center'>
			<Image alt='Mathieu Céraline' height={24} width={24} src='/avatar.jpg' className='rounded-full' />
			<span className='ml-2'>Mathieu Céraline • {format(parseISO(date), 'MMMM dd, yyyy')}</span>
		</div>
	);
}
