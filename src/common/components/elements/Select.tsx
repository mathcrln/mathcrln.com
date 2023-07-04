import UpDownArrows from '@/common/components/icons/SelectArrows';
import React, { ChangeEvent, SyntheticEvent } from 'react';

export type IOption = {
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
			className={`${className} text-black group relative flex cursor-pointer items-center justify-center space-x-2 rounded-md border  border-gray-300  group-focus:ring-2 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-400`}
		>
			{selectedOption && (
				<span className='pointer-events-none absolute left-[12px] inline-flex transition-colors duration-75 ease-in'>
					{selectedOption.icon}
				</span>
			)}
			<select
				name='theme'
				id={id || undefined}
				aria-label={label}
				className='focus:outline-none h-[32px] appearance-none px-[calc(1.5*24px)] dark:appearance-none'
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
			<UpDownArrows className='pointer-events-none absolute right-[12px] inline-flex transition-colors duration-75 ease-in hover:text-primary-dark' />
		</div>
	);
}

export default Select;
