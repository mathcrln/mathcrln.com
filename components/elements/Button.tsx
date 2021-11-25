import isInternalLink from 'utils/isInternalLink';
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
		<span className={`bg-primary-light dark:bg-primary-dark rounded-lg py-3 px-6 font-medium text-white ${className}`}>
			{title}
		</span>
	);
}

function LinkButton({ title, url, className }: ILinkButton): JSX.Element {
	if (isInternalLink(url))
		return (
			<Link href={url} passHref>
				<a title={title}>
					<Button title={title} className={className} />
				</a>
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
