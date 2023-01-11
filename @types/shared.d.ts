import { ResponseNotice } from './api/notice';
import { ResponseResource } from './api/resource';
import { MutableRefObject } from 'react';
import { ResponsePublication } from './api/publication';

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
	isDrawer?: boolean;
};

/**
 * @for Board */
type BoardProps = PageButtonProps & {
	dataMaps?: Map<string, string>[];
	basePath: string;
	order: Map<string, string>;
	isAdmin?: boolean;
};

/**
 * @for View
 * @by ResourceViewPage
 * @by NoticeViewPage */
type ViewProps<T extends ResponseResource.GetById | ResponseNotice.GetById> = {
	id: number;
	data: T;
	basePath: string;
	prev?: AdjacentItemType;
	next?: AdjacentItemType;
	isNotice?: boolean;
	isAdmin?: boolean;
};

/**
 * @for BoardButton
 * @by View */
type BoardButtonProps = {
	boardPath: string;
};

/**
 * @for AdjacentNavigator
 * @by View */
type AdjacentNavigatorProps = Pick<ViewProps<T>, 'prev' | 'next'> & {};

/**
 * @for SelectBox */
type SelectBoxProps = {
	options: string[];
};

/**
 * @for AdminButton */
type AdminButtonProps = ChildrenType & {
	isOrange?: boolean;
	isRed?: boolean;
	onClick: () => void;
};

/**
 * @for Editor */
type EditorProps = {
	value: string;
	onChange: (text: string) => void;
};

/**
 * @for Input */
type InputProps = {
	label?: string;
	value?: string;
	type?: string;
	inputRef?: MutableRefObject<HTMLInputElement>;
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	maxLength?: number;
	minLength?: number;
	isBlue?: boolean;
};

/**
 * @for PageButton */
type PageButtonProps = {
	currentPage: number;
	totalPosts: number | undefined;
	size: number | undefined;
	onChangePage: (page: number) => void;
};

/**
 * @for NewEditorPost */
type NewEditorPostProps = FileUploadElementProps & {
	title: string;
	body: string;
	writer: string;
	wishToDeleteFileKeys?: Set<string>;
	onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeWriter: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeBody: (text: string) => void;
	onSubmit: () => void;
};

/**
 * @for FileUploadElement
 * @in NewEditorPost */
type FileUploadElementProps = {
	files: File[];
	prevFiles?: FileDataType[];
	isMultiple?: boolean;
	isEditor?: boolean;
	wishToDeleteFileKeys?: Set<string>;
	onAddFile: (files: File[]) => void;
	onRemoveFile: (targetLastModified: number) => void;
	onToggleToDelete?: (targetFileKey: string) => void;
};

/**
 * @for ImagePreview */
type ImagePreviewProps = {
	file: File;
};

/**
 * @for AdminSidebar */
type AdminSidebarProps = {
	isSidebarOpen: boolean;
};

/**
 * @for AdminHeader */
type AdminHeaderProps = {
	onToggleSidebar: () => void;
};

/**
 * @for AdminView */
type AdminViewProps = ChildrenType & {
	id: number;
	basePath: string;
	onEdit: () => void;
	onDelete?: () => void;
};

/**
 * @for AdminNewEdit */
type AdminNewEditProps = ChildrenType & {
	onSubmit: () => void;
};

/**
 * @for PrevToNewImage */
type PrevToNewImageProps = {
	imgs: File[];
	prevImg: FileDataType;
	folder: string;
	wishToDeleteFileKeys: Set<string>;
	onToggleToDelete: (prevFileKey: string) => void;
};

/**
 * @for PrevToNewPdf */
type PrevToNewPdfProps = {
	pdfs: File[];
	prevPdf: FileDataType;
	wishToDeletePdfKeys: Set<string>;
	onToggleToDeletePdfs: (prevFileKey: string) => void;
};
