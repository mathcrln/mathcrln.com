export const GA_TRACKING_ID =
	process.env.NODE_ENV === 'production'
		? process.env.NEXT_PUBLIC_GA_PRODC_TRACKING_ID
		: process.env.NEXT_PUBLIC_GA_DEV_TRACKING_ID;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export const pageview = (url: URL): void => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	});
};

type GTagEvent = {
	action: string;
	category: string;
	label: string;
	value: number;
};

export const event = ({ action, category, label, value }: GTagEvent): void => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value,
	});
};
