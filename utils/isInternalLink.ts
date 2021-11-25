const isInternalLink = (link: string): boolean => {
	const isInternal = link?.startsWith('/') || link?.startsWith('#');
	return isInternal;
};

export default isInternalLink;
