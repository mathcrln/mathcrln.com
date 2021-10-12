import { FormulaPropertyValue, StringFormulaValue } from '@notionhq/client/build/src/api-types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';

const notion = new Client({
	auth: process.env.NOTION_ACCESS_TOKEN,
});

type Data =
	| {
			title: string;
			lastEdited: string;
			id: string;
	  }
	| unknown;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>): Promise<Data> {
	const databaseId = process.env.NOTION_DATABASE as string;
	try {
		const response = await notion.databases.query({
			database_id: databaseId,
			filter: {
				and: [
					{
						property: 'Status',
						select: {
							equals: 'Published',
						},
					},
					{
						property: 'Name',
						text: {
							is_not_empty: true,
						},
					},
				],
			},
			sorts: [
				{
					timestamp: 'last_edited_time',
					direction: 'descending',
				},
			],
		});

		const pages = response.results.map((page) => {
			const title = ((page.properties.Title as FormulaPropertyValue).formula as StringFormulaValue).string;
			return {
				title,
				lastEdited: page.last_edited_time as string,
				id: page.id as string,
			};
		});
		res.status(200).json(pages);
	} catch (e) {
		res.status(400).json(e);
	}
	return res.end();
}
