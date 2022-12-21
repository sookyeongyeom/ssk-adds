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

type EditPageInnerShellProps<T> = ViewPageProps & {
	['resource']?: T | undefined;
	['notice']?: T | undefined;
};
