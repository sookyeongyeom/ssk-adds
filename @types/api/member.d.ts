export namespace RequestMember {
	type Get = {
		page: number;
		size?: number;
	};

	type GetById = {
		id: number;
	};

	type Post = {
		id?: 0;
		name: string;
		email: string;
		homepage: string;
		phoneNumber: string;
		introBody: string;
		jobTitle: string;
		img: string;
		responsibility: string;
	};

	type Put = {
		id: number;
		name: string;
		email: string;
		homepage: string;
		phoneNumber: string;
		introBody: string;
		jobTitle: string;
		img: string;
		responsibility: string;
	};

	type Delete = {
		id: number;
	};
}

export namespace ResponseMember {
	type Get = {
		items: Item[];
		total: number;
		page: number;
		size: number;
	};

	type GetById = Item;

	type Item = {
		id: number;
		name: string;
		email: string;
		homepage: string;
		phoneNumber: string;
		introBody: string;
		jobTitle: string;
		img: string;
		responsibility: string;
		[key: string]: string | number;
	};

	type Post = {
		id: number;
		name: string;
		email: string;
		homepage: string;
		phoneNumber: string;
		introBody: string;
		jobTitle: string;
		img: string;
		responsibility: string;
	};

	type Put = string;
}
