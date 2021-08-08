export type IBook = IBookCard & {
	description: string;
};

export type IBookCard = {
	name: string;
	author: string;
	content: string;
	cover: {
		url: string;
		height: number;
		width: number;
	};
	slug: string;
};
