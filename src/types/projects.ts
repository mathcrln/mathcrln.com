export type IProjectCard = {
	name: string;
	id: string;
	description: string;
	cover: { url: string; height: number; width: number; alternativeText?: string };
	tags?: { name: string }[];
	skills?: { name: string; icon: { url: string; height: number; width: number } }[];
	slug: string;
};

export type IProject = IProjectCard & {
	content: string;
	updatedAt: Date;
};
