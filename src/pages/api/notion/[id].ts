/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';
import { FormulaPropertyValue, StringFormulaValue } from '@notionhq/client/build/src/api-types';

const notion = new Client({
	auth: process.env.NOTION_ACCESS_TOKEN,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<unknown> {
	const { id } = req.query;
	try {
		if (typeof id !== 'undefined') {
			const page = await notion.pages.retrieve({ page_id: id as string });

			// const response = await notion.blocks.children.list({
			// 	block_id: id as string,
			// });
			// console.log(response.results[7].paragraph.text);
			// response.results.forEach((element) => {
			// console.log(element);
			// element.paragraph?.text?.forEach((paragraph) => console.log(paragraph));
			// });
			res.status(200).json({
				title: ((page.properties.Title as FormulaPropertyValue).formula as StringFormulaValue).string,
			});
		}
	} catch (e) {
		console.log(e.message);
	}
	return res.end();
}
