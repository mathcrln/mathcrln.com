import fs from 'fs';
const path = require('path');

export const BASE_CONTENT_PATH = 'content';
// const BLOG_POSTS_PATH = `${BASE_CONTENT_PATH}/blog`;
const BLOG_PATH = path.join(process.cwd(), 'content', 'blog');

// WHAT I WANT
// 1 • A function to get the path of all the available poths (getStaticPaths)
// 2 • A function to get the data of a specific path (getStaticProps)
// 3 • A function to get the frontmatter data of a subset of all available paths (getStaticProps)
// 4 • A function to determine how many posts are available and if there are more pages (pagination)

export const getItemsPathsByType = ({ type, withExt }: { type: 'blog' | 'library'; withExt: false }): string[] => {
	const paths = fs.readdirSync(BLOG_PATH).filter((p) => /\.mdx?$/.test(p));
	if (withExt) return paths;
	return paths.map((p) => p.replace(/\.mdx?$/, ''));
};

// A function to get the data of a specific path (getStaticProps)
export const getItemBySlug = async ({ slug, type }: { slug: string; type: 'blog' | 'library' }) => {
	const fullPath = path.join(BLOG_PATH, `${slug}.mdx`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	return fileContents;
};
