import slugify from 'slugify';

export type IHeading = {
	title: string;
	link: string;
};
export type ITableOfContents = Array<IHeading> | [];

export default function getTableOfContents(content: string): ITableOfContents {
	const regexp = new RegExp(/^(### |## )(.*)\n/, 'gm');
	const headings = [...content.matchAll(regexp)];

	let tableOfContents: ITableOfContents = [];

	if (headings.length) {
		tableOfContents = headings.map((heading) => {
			const headingText = heading[2].trim();
			const headingType = heading[1].trim() === '##' ? 'h2' : 'h3';
			const headingLink = slugify(headingText, { lower: true, strict: true });

			return {
				title: headingType === 'h2' ? headingText : `- ${headingText}`,
				link: `#${headingLink}`,
			};
		});
	}

	return tableOfContents;
}

// Based on a regex suggested by @SimeonGriggs https://github.com/hashicorp/next-mdx-remote/issues/53
