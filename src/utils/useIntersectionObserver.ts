import { SetStateAction, useEffect, useRef, Dispatch } from 'react';

interface HeadingRef {
	current: IntersectionObserverEntry;
	[key: string]: IntersectionObserverEntry;
}
const useIntersectionObserver = (setActiveId: Dispatch<SetStateAction<string>>): void => {
	const headingElementsRef = useRef<HeadingRef>({} as HeadingRef);

	useEffect(() => {
		/**
		 * This determines the zone for when an element is "visible".
		 * */
		const rootMarginValue = { rootMargin: '0px 0px -40% 0px' };
		const headingElements = Array.from(document.querySelectorAll('h2, h3'));

		const callback = (headings: Array<IntersectionObserverEntry>) => {
			headingElementsRef.current = headings.reduce((map, headingElement) => {
				// eslint-disable-next-line no-param-reassign
				map[headingElement.target.id] = headingElement;
				return map;
			}, headingElementsRef.current);

			const visibleHeadings: Array<IntersectionObserverEntry> = [];

			Object.keys(headingElementsRef.current).forEach((key) => {
				const headingElement: IntersectionObserverEntry = headingElementsRef.current[key];
				if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
			});

			const getIndexFromId = (id: string) => headingElements.findIndex((heading) => heading.id === id);
			if (visibleHeadings.length > 0) {
				setActiveId(visibleHeadings[0].target.id);
			} else if (visibleHeadings.length > 1) {
				const sortedVisibleHeadings = visibleHeadings.sort(
					(a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
				);

				setActiveId(sortedVisibleHeadings[0].target.id);
			}
		};

		const observer = new IntersectionObserver(callback, rootMarginValue);

		headingElements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, [setActiveId]);
};

export default useIntersectionObserver;

// Based on a tutorial by Emma Goto https://www.emgoto.com/react-table-of-contents/
