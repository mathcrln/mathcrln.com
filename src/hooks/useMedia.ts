import { useState, useEffect } from 'react';

const useMedia = (queries: string[], values: boolean[], defaultValue: boolean): boolean | null => {
	const [value, setValue] = useState<boolean | null>(null);

	useEffect(() => {
		const mediaQueryLists = queries.map((query: string) => window.matchMedia(query));

		const getValue = () => {
			const index = mediaQueryLists.findIndex((mql) => mql.matches);
			return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
		};
		setValue(getValue);
		const handler = () => setValue(getValue);
		mediaQueryLists.forEach((mql) =>
			mql.addEventListener('change', () => {
				handler();
			})
		);
		return () =>
			mediaQueryLists.forEach((mql) =>
				mql.addEventListener('change', () => {
					handler();
				})
			);
	}, [defaultValue, queries, values]);

	return value;
};

export default useMedia;
