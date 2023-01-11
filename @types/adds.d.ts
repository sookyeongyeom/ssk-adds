import { MutableRefObject } from 'react';

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

/**
 * @for NewsBoxElement
 * @in NewsPage */
type NewsBoxElementProps = {
	id: number;
	title: string;
	body: string;
	url: string;
};

/**
 * @for PublicationBoxElement
 * @in PublicationPage */
type PublicationBoxElementProps = {
	title: string;
	writer: string;
	img: string;
	pdf: string;
};

/**
 * @for Header */
type HeaderProps = {
	onOpenDrawer: (e: React.MouseEvent) => void;
};

/**
 * @for Drawer */
type DrawerProps = {
	isDrawerOpen: boolean;
	drawerRef: MutableRefObject<HTMLDivElement>;
};
