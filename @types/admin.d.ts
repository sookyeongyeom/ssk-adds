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
