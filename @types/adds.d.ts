/**
 * @for FAQBoxElement
 * @in FAQPage */
type FAQBoxElementProps = {
	idx: number;
	category: string;
	question: string;
	answer: string;
};

/**
 * @for ResearchBoxElement
 * @in ResearchPage */
type ResearchBoxElementProps = {
	title: string;
	description: string;
};

/**
 * @for MemberBoxElement
 * @in MemberPage */
type MemberBoxElementProps = {
	name: string;
	email: string;
	homepage: string;
	phoneNumber: string;
	introBody: string;
	jobTitle: string;
	img: string;
	responsibility: string;
};

/**
 * @for ResourceViewPage
 * @for NoticeViewPage
 * @by page/resource/[id].tsx
 * @by page/notice/[id].tsx */
type ViewPageProps = {
	id: number;
};
