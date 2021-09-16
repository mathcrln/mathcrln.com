import { NextApiRequest, NextApiResponse } from 'next';
import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';
import { FormulaPropertyValue, StringFormulaValue } from '@notionhq/client/build/src/api-types';

const unofficialRenderer = new NotionAPI({
	authToken: process.env.NOTION_UNOFFICIAL_TOKEN,
});
const notion = new Client({
	auth: process.env.NOTION_ACCESS_TOKEN,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<unknown> {
	const { id } = req.query;
	try {
		if (typeof id !== 'undefined') {
			console.log('HERE', typeof id);
			const recordMap = await unofficialRenderer.getPage(id as string);
			const page = await notion.pages.retrieve({ page_id: id as string });

			res.status(200).json({
				title: ((page.properties.Title as FormulaPropertyValue).formula as StringFormulaValue).string,
				recordMap,
			});
		}
	} catch (e) {
		throw new Error(e as string);
	}
	return res.end();
}
