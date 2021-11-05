import LinkWrapper from '../elements/LinkWrapper';

type ICardInfos = {
	title: string;
	details?: JSX.Element | JSX.Element[] | string;
	url: string;
	options?: {
		titleSize: 'lg' | 'xl';
	};
};

export default function CardText({ title, details, url, options }: ICardInfos): JSX.Element {
	const titleStyle = options?.titleSize === 'lg' ? 'text-lg' : 'text-xl';

	return (
		<>
			<LinkWrapper href={url}>
				<h3 className={`mt-5 font-bold text-xl hover:text-primary-light dark:hover:text-primary-dark ${titleStyle}`}>
					{title}
				</h3>
			</LinkWrapper>
			{details ? <p className='text-lg text-gray-600 dark:text-gray-400 mt-2'>{details}</p> : null}
		</>
	);
}
