const fs = require('fs');
const path = require('path');
import matter from 'gray-matter';

export function getResource<T extends { content: string }>({ slug, dir }: { slug: string; dir: string }): T {
	try {
		const mdxContent = fs.readFileSync(path.join(process.cwd(), `${dir}/${slug}.mdx`), 'utf8');
		const { data, content } = matter(mdxContent);
		return { ...data, content } as T;
	} catch (e) {
		console.error(e);
		throw new Error(e as string);
	}
}

export function getResources<T>(
	docPath: string,
	pagination?: {
		limit?: number;
		pageNumber?: number;
	}
): { total: number; pages: number; hasPreviousPage: boolean; hasNextPage: boolean; data: T[] } {
	try {
		let skip = 0;
		const filePath = path.join(process.cwd(), docPath);
		const { total, data } = JSON.parse(fs.readFileSync(filePath, 'utf8'));
		const { limit, pageNumber } = pagination ?? { limit: 0, pageNumber: 0 };
		if (limit) {
			skip = pageNumber ? (pageNumber - 1) * limit : 0;
			return {
				total,
				pages: Math.ceil(total / limit),
				hasPreviousPage: skip > 0,
				hasNextPage: skip + limit < total,
				data: data.slice(skip, skip + limit),
			};
		}
		return { total, pages: 1, hasPreviousPage: false, hasNextPage: false, data };
	} catch (e) {
		console.error(e);
		throw new Error(e as string);
	}
}
