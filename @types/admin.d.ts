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
