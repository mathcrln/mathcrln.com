const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function getPost(slug) {
	try {
		const mdxContent = fs.readFileSync(path.join(process.cwd(), 'content', 'posts', `${slug}.mdx`), 'utf8');
		const { data, content } = matter(mdxContent);
		return { data, content };
	} catch (e) {
		console.error(e);
		throw new Error(e);
	}
}

function createPostsIndex() {
	const savePath = path.join(process.cwd(), 'public', 'indexes');
	const postsDirectory = path.join(process.cwd(), 'content', 'posts');
	const fileNames = fs.readdirSync(postsDirectory);
	const postsData = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.mdx$/, '');
		const { data } = getPost(slug);
		return {
			...data,
			slug,
		};
	});
	const obj = {
		lastUpdated: new Date().toISOString(),
		total: postsData.length,
		data: postsData.sort((a, b) => new Date(b.date) - new Date(a.date)),
	};
	!fs.existsSync(savePath) && fs.mkdirSync(savePath, { recursive: true });
	fs.writeFileSync(`${savePath}/posts.json`, JSON.stringify(obj));
}

createPostsIndex();
