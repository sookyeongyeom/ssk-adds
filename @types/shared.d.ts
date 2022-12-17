import { ResponseResource } from './api/resource';

/**
 * @base */
type AdjacentItemType =
	| {
			title: string;
			path: string;
	  }
	| undefined;

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
 * @for View
 * @by ResourceViewPage */
type ViewProps<T extends ResponseResource.GetById> = {
	data: T;
	boardPath: string;
	prev: AdjacentItemType;
	next: AdjacentItemType;
};

/**
 * @for BoardButton
 * @by View */
type BoardButtonProps = Pick<ViewProps<T>, 'boardPath'> & {};

/**
 * @for AdjacentNavigator
 * @by View */
type AdjacentNavigatorProps = Pick<ViewProps<T>, 'prev' | 'next'> & {};
