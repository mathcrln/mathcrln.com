function getStrapiURL(path = '') {
	return `${process.env.BACKEND_URL || 'http://localhost:1337'}${path}`;
}

type ICover = {
	url: string;
};

function getStrapiMedia(media: ICover): ICover {
	const imageUrl = media.url.startsWith('/') ? getStrapiURL(media.url) : media.url;

	return { ...media, url: imageUrl };
}

export default getStrapiMedia;
