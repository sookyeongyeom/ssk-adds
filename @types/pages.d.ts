import notice from '../pages/adds/notice/index';
import resource from '../pages/adds/resource/index';
import { Paths } from '../constants/paths';
import { ResponseMember } from './api/member';

/**
 * @for ResourceViewPage
 * @for NoticeViewPage
 * @by pages/adds/resource/[id].tsx
 * @by pages/adds/notice/[id].tsx
 * @by pages/admin/resource/[id].tsx
 * @by pages/admin/notice/[id].tsx */
type ViewPageProps = {
	id: number;
};

/**
 * @for EditPageInnerShell */
type EditPageInnerShellProps<T> = ViewPageProps & {
	data: T | undefined;
	path: string;
};
