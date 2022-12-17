import { ResponseNotice } from './api/notice';
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
type BoardProps<T extends ResponseResource.Get | ResponseNotice.Get> = {
	datas: T;
	isNotice?: boolean;
};

/**
 * @for View
 * @by ResourceViewPage
 * @by NoticeViewPage */
type ViewProps<T extends ResponseResource.GetById | ResponseNotice.GetById> = {
	data: T;
	boardPath: string;
	prev: AdjacentItemType;
	next: AdjacentItemType;
	isNotice?: boolean;
};

/**
 * @for BoardButton
 * @by View */
type BoardButtonProps = Pick<ViewProps<T>, 'boardPath'> & {};

/**
 * @for AdjacentNavigator
 * @by View */
type AdjacentNavigatorProps = Pick<ViewProps<T>, 'prev' | 'next'> & {};
