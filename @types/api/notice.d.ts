export namespace RequestNotice {
	type Get = {
		page: number;
		size?: number;
	};

	type GetById = {
		id: number;
	};

	type Post = {
		id?: 0;
		writer: string;
		title: string;
		body: string;
		file: string;
		created_date: string;
	};

	type Put = {
		id: number;
		writer: string;
		title: string;
		body: string;
		file: string;
		created_date: string;
	};

	type Delete = {
		id: number;
	};
}

export namespace ResponseNotice {
	type Get = {
		items: Item[];
		total: number;
		page: number;
		size: number;
	};

	type GetById = Item;

	type Item = {
		id: number;
		writer: string;
		title: string;
		body: string;
		file: string;
		created_date: string;
	};

	type Post = {
		id: number;
		title: string;
		body: string;
		writer: string;
		file: string;
		created_date: string;
	};

	type Put = string;
}
