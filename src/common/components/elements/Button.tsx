import { isInternalLink } from '@/utils';
import Link from 'next/link';

type IButton = {
	title: string;
	className?: string;
};

type ILinkButton = IButton & {
	url: string;
};
type IActionButton = IButton & {
	handler: () => unknown;
	type: 'reset' | 'submit' | 'button';
};

function Button({ title, className }: IButton): JSX.Element {
	return (
		<span className={`rounded-lg bg-primary-light px-6 py-3 font-medium text-white dark:bg-primary-dark ${className}`}>
			{title}
		</span>
	);
}

function LinkButton({ title, url, className }: ILinkButton): JSX.Element {
	if (isInternalLink(url))
		return (
			<Link href={url} passHref title={title}>
				<Button title={title} className={className} />
			</Link>
		);
	return (
		<a href={url} title='title' target='_blank' rel='noreferrer'>
			<Button title={title} className={className} />
		</a>
	);
}

function ActionButton({ title, handler, type = 'button', className }: IActionButton): JSX.Element {
	return (
		<button type={type} onClick={handler}>
			<Button title={title} className={className} />
		</button>
	);
}

export { ActionButton, LinkButton };
