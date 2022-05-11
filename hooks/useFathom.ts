import router from 'next/router';
import { useEffect } from 'react';
import * as Fathom from 'fathom-client';

const FATHOM_ID = process.env.NEXT_PUBLIC_FATHOM_ID || '';

export default function useFathom(): void {
	useEffect(() => {
		Fathom.load(FATHOM_ID, {
			includedDomains: ['mathcrln.com'],
		});

		function onRouteChangeComplete() {
			Fathom.trackPageview();
		}

		router.events.on('routeChangeComplete', onRouteChangeComplete);

		return () => {
			router.events.off('routeChangeComplete', onRouteChangeComplete);
		};
	}, []);
}
