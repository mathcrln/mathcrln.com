export type IBook = IBookCard & {
	description: string;
};

export type IBookCard = {
	title: string;
	author: string;
	cover: {
		url: string;
		height: number;
		width: number;
	};
};
