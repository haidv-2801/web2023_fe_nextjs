import { FixedRoute } from '@commons/interfaces';
import { RouteType } from '@commons/enum';

export const ROUTERS = {
	HOME: '/',
	HOME1: '/trang-chu',
	ABOUT: '/gioi-thieu',
	PRODUCT: '/san-pham',
	PROJECT: '/du-an',
	NEWS: '/tin-tuc',
	RECRUITMENT: '/tuyen-dung',
	CONTACT: '/lien-he',
};

/**
 * những route được fix cứng
 */
export const FIXED_ROUTE: FixedRoute[] = [
	{
		type: RouteType.Home,
		route: ROUTERS.HOME,
	},
	{
		type: RouteType.Home,
		route: ROUTERS.HOME1,
	},
	{
		type: RouteType.Single,
		route: ROUTERS.ABOUT,
	},
	{
		type: RouteType.List,
		route: ROUTERS.PRODUCT,
	},
	{
		type: RouteType.List,
		route: ROUTERS.PROJECT,
	},
	{
		type: RouteType.List,
		route: ROUTERS.NEWS,
	},
	{
		type: RouteType.List,
		route: ROUTERS.RECRUITMENT,
	},
	{
		type: RouteType.Single,
		route: ROUTERS.CONTACT,
	},
];

export const COMPONENT_BLOCK = {
	HEAD_SMALL_TITLE: 'home-block.head-small-title',
	PARTNER_AND_CUSTOMER: 'home-block.partner-and-customer',
	CAROUSELS: 'home-block.carousel',
	PARTNER_CUSTOMER: 'home-block.partner-customer',
	ARTICLES: 'home-block.articles',
};
