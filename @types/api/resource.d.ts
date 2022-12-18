export namespace RequestResource {
	type Get = {
		page: number;
		size?: number;
	};

	type GetById = {
		id: number;
	};
}

export namespace ResponseResource {
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
}
