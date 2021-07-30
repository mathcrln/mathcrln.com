import { SyntheticEvent } from 'react';

const scrollSmoothly = (e: SyntheticEvent, link: string): void => {
	if (e.type === 'click') {
		e.preventDefault();
	}

	if (typeof window !== 'undefined' && typeof document != null) {
		document?.querySelector(`${link}`)?.scrollIntoView({
			behavior: 'smooth',
		});
	}
};

export default scrollSmoothly;
