export type LocaleCode = 'vi' | 'en';

//#region  common
export interface StrapiItem {
	id: number;
	attributes: any;
}
//#endregion

//#region Article

export interface Article {
	id: number;
	title: string;
	content: string;
	slug: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	sitemap_exclude: boolean;
	views: number;
	admin_user: AdminUser;
	category: Category;
	image: Image;
	seo: Seo;
	createdBy: CreatedBy;
	updatedBy: UpdatedBy;
	localizations: any[];
}

export interface AdminUser {}

export interface Category {
	count: number;
}

export interface Image {
	id: number;
	name: string;
	alternativeText: any;
	caption: any;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: any;
	provider: string;
	provider_metadata: any;
	folderPath: string;
	createdAt: string;
	updatedAt: string;
	sitemap_exclude: any;
	folder: any;
}

export interface Formats {
	thumbnail: Thumbnail;
}

export interface Thumbnail {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface Seo {
	id: number;
	metaTitle: string;
	metaDescription: string;
	keywords: string;
	metaRobots: string;
	structuredData: any;
	metaViewport: string;
	canonicalURL: string;
	metaImage: MetaImage;
	metaSocial: MetaSocial[];
}

export interface MetaImage {
	id: number;
	name: string;
	alternativeText: any;
	caption: any;
	width: number;
	height: number;
	formats: Formats2;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: any;
	provider: string;
	provider_metadata: any;
	folderPath: string;
	createdAt: string;
	updatedAt: string;
	sitemap_exclude: any;
	folder: any;
}

export interface Formats2 {
	thumbnail: Thumbnail2;
	large: Large;
	small: Small;
	medium: Medium;
}

export interface Thumbnail2 {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface Large {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface Small {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface Medium {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface MetaSocial {
	id: number;
	socialNetwork: string;
	title: string;
	description: string;
	image: Image2;
}

export interface Image2 {
	id: number;
	name: string;
	alternativeText: any;
	caption: any;
	width: number;
	height: number;
	formats: Formats3;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: any;
	provider: string;
	provider_metadata: any;
	folderPath: string;
	createdAt: string;
	updatedAt: string;
	sitemap_exclude: any;
	folder: any;
}

export interface Formats3 {
	thumbnail: Thumbnail3;
	small?: Small2;
	large?: Large2;
	medium?: Medium2;
}

export interface Thumbnail3 {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface Small2 {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface Large2 {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface Medium2 {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface CreatedBy {
	id: number;
	firstname: string;
	lastname: string;
	username: any;
}

export interface UpdatedBy {
	id: number;
	firstname: string;
	lastname: string;
	username: any;
}

//#endregion

export type ServiceResponse = {
	Code: number;
	IsSuccess: boolean;
	Data: any;
};

//#region Error
export interface StrapiResponse {
	data: any;
	// error: Error;
}

export interface Error {
	status: number;
	name: string;
	message: string;
	details: Details;
}

export interface Details {}
//#endregion

//#region  contact me
export interface ContactMeData {
	id: number;
	attributes: ContactMe;
}

export interface ContactMe {
	id: string;
	title: string;
	content: string;
	phone: string;
	email: string;
	address: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
}
//#endregion

//#region  menu
export interface SubMenuItem {
	id: string;
	title: string;
	slug: string;
	order: number;
	target: string;
	items: SubMenuItem[];
}

//#endregion

//#region home block single
export interface HomeBlockSingle {
	id: number;
	__component: string;
	head_small_title: string;
	head_title: string;
	image_position: string;
	description: string;
	background_color: string;
	show: boolean;
	media: HomeBlockSingleMedia;
	button: BuHomeBlockSingleButton;
	partners: Array<any>;
	customers: Array<any>;
	articles: Array<any>;
}

export interface HomeBlockSingleMedia {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface BuHomeBlockSingleButton {
	id: number;
	title: string;
	link: string;
	bg_color: string;
}
//#endregion

//#region heade
export interface Header {
	phone: string;
	email: string;
	work_time: string;
}
//#endregion
