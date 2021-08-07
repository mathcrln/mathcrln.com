import UpDownArrows from '@/components/icons/SelectArrows';
import React, { ChangeEvent, SyntheticEvent } from 'react';

type IOption = {
	label: string;
	value: string;
	title: string;
	icon?: JSX.Element;
};

type ISelect = {
	options: Array<IOption>;
	className?: string;
	selected?: string | null;
	label: string;
	id: string;
	onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
	onBlur?: (e: SyntheticEvent<HTMLSelectElement>) => void;
};

function Select({ options, id, label, className, onBlur, onChange, selected }: ISelect): JSX.Element {
	const selectedOption = options.find((option) => option.value === selected);
	return (
		<div
			className={`${className} border relative flex items-center text-black dark:text-gray-300 rounded-md border-gray-300 dark:border-gray-600 dark:hover:border-gray-400  space-x-2  justify-center group group-focus:ring-2 cursor-pointer`}
		>
			{selectedOption && (
				<span className='inline-flex absolute pointer-events-none transition-colors duration-75 ease-in left-[12px]'>
					{selectedOption.icon}
				</span>
			)}
			<select
				name='theme'
				id={id || undefined}
				aria-label={label}
				className='appearance-none focus:outline-none dark:appearance-none h-[32px] px-[calc(1.5*24px)]'
				onChange={onChange || undefined}
				onBlur={onBlur || undefined}
				value={selected || undefined}
			>
				{options.map((option) => (
					<option key={option.title} aria-label={option.label} value={option.value}>
						{option.title}
					</option>
				))}
			</select>
			<UpDownArrows className='inline-flex absolute pointer-events-none transition-colors duration-75 ease-in right-[12px] hover:text-primary-dark' />
		</div>
	);
}

export default Select;
