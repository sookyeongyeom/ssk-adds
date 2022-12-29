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
