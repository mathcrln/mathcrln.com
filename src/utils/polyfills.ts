/**
 * Adds support for intersection-observer if it's not available in the current browser (mostly safari).
 * */
async function initializeObserver(): Promise<void> {
	if (typeof window !== 'undefined') {
		if (!('IntersectionObserver' in window)) {
			await import('intersection-observer');
		}
	}
}
export default initializeObserver;
