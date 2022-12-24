export namespace RequestNews {
	type Get = {
		page: number;
		size?: number;
	};

	type GetById = {
		id: number;
	};

	type Post = {
		id?: 0;
		title: string;
		body: string;
		url: string;
		createdDate: string;
	};

	type Put = {
		id: number;
		title: string;
		body: string;
		url: string;
		createdDate: string;
	};

	type Delete = {
		id: number;
	};
}

export namespace ResponseNews {
	type Get = {
		items: Item[];
		total: number;
		page: number;
		size: number;
	};

	type GetById = Item;

	type Post = Item;

	type Item = {
		id: number;
		title: string;
		body: string;
		url: string;
		createdDate: string;
	};

	type Put = string;
}
