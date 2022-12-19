import { PageButtonProps } from './shared';

/**
 * @for AdminBoard */
type AdminBoardProps = PageButtonProps & {
	dataMaps?: Map<string, string>[];
	basePath: string;
	order: Map<string, string>;
};
