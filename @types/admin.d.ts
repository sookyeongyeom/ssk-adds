/**
 * @for NewsNewEdit */
type NewsNewEditProps = {
	title: string;
	body: string;
	url: string;
	onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeBody: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
};

/**
 * @for FAQNewEdit */
type FAQNewEditProps = {
	title: string;
	writer: string;
	category: string;
	reply: string;
	onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeCategory: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeReply: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
};

/**
 * @for MemberNewEdit */
type MemberNewEditProps = ChildrenType & {
	name: string;
	email: string;
	homepage: string;
	phoneNumber: string;
	introBody: string;
	jobTitle: string;
	responsibility: string;
	onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeHomepage: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangePhoneNumber: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeIntroBody: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeJobTitle: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeResponsibility: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
};

/**
 * @for PublicationNewEdit */
type PublicationNewEditProps = ChildrenType & {
	title: string;
	writer: string;
	onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
};

/**
 * @for PaperNewEdit */
type PaperNewEditProps = {
	title: string;
	year: string;
	keywords: string[];
	researcherName: string;
	doi: string;
	onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeYear: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeKeyword: (e: ChangeEvent<HTMLInputElement>, idx: number) => void;
	onAddKeyword: () => void;
	onRemoveKeyword: (idx: number) => void;
	onChangeResearcherName: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeDoi: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
};

/**
 * @for usePhoneNumbers */
type PhoneNumberType = {
	name: string;
	phoneNumber: string;
};

/**
 * @for ContactEdit */
type ContactEditProps = {
	email: string;
	phoneNumbers: PhoneNumberType[];
	wayToLab: string;
	onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeName: (e: ChangeEvent<HTMLInputElement>, idx: number) => void;
	onChangePhoneNumber: (e: ChangeEvent<HTMLInputElement>, idx: number) => void;
	onChangeWayToLab: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
};
