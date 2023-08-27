import { RouteType } from '@commons/enum';

/**
 * những router được fix
 */
export interface FixedRoute {
	type: RouteType;
	route: string;
}

export interface IconProps {
	width?: number;
	height?: number;
	viewBox?: string;
	fill?: string;
	stroke?: string;
	className?: string;
}
