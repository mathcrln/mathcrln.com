import type { NextApiRequest, NextApiResponse } from 'next';
import { getPreviewPostBySlug } from 'features/blog/graphql/posts';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	// Check the secret and next parameters
	if (req.query.secret !== process.env.GRAPHCMS_PREVIEW_SECRET || !req.query.slug) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	// Fetch the headless CMS to check if the provided `slug` exists
	const post = await getPreviewPostBySlug(req.query.slug as string);

	// If the slug doesn't exist prevent preview mode from being enabled
	if (!post) {
		return res.status(401).json({ message: 'Invalid slug' });
	}

	// Enable Preview Mode by setting the cookies
	res.setPreviewData(
		{},
		{
			maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
		}
	);

	// Redirect to the path from the fetched post
	res.writeHead(307, { Location: `/blog/${post.slug}` });
	return res.end();
}
