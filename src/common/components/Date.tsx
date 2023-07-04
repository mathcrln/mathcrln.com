import { parseISO, format } from 'date-fns';

export default function Date({ date, className }: { date: string; className?: string }): JSX.Element {
	return (
		<span className={`inline-block rounded-md bg-primary-light py-1 px-3 text-white dark:bg-primary-dark ${className}`}>
			{format(parseISO(date), 'dd/MM/yyyy')}
		</span>
	);
}
