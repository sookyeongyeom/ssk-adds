import { ResponseResource } from './api/resource';

/**
 * @for LinkItem */
type LinkItemProps = {
	href: string;
	title: string;
	isCurrent?: boolean;
};

/**
 * @for Sidebar */
type SidebarProps = {
	path: string;
};

/**
 * @for Board */
type BoardProps<T extends ResponseResource.Get> = {
	datas: T;
};

/**
 * @for View */
type ViewProps<T extends ResponseResource.GetById> = {
	data: T;
	boardPath?: string;
	prev?: {
		title: string;
		id: number;
	};
	next?: {
		title: string;
		id: number;
	};
};
