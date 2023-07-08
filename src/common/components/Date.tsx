import { parseISO, format } from 'date-fns';

export default function Date({ date, className }: { date: string; className?: string }): JSX.Element {
	return (
		<span className={`inline-block rounded-md bg-primary-light px-3 py-1 text-white dark:bg-primary-dark ${className}`}>
			{format(parseISO(date), 'dd/MM/yyyy')}
		</span>
	);
}
