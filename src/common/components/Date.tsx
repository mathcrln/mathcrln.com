import { parseISO, format } from 'date-fns';

export default function Date({ date, className }: { date: string; className?: string }): JSX.Element {
	return (
		<span className={`bg-primary-light dark:bg-primary-dark text-white rounded-md py-1 px-3 inline-block ${className}`}>
			{format(parseISO(date), 'dd/MM/yyyy')}
		</span>
	);
}
