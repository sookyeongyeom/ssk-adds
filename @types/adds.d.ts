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
 * @for PaperBoxElement
 * @in PaperPage */
type PaperBoxElementProps = {
	id: number;
	title: string;
	year: string;
	keywords: string;
	researcherName: string;
	doi: string;
};
