export namespace RequestNews {
	type Get = {
		page: number;
		size?: number;
	};

	type GetById = {
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

	type Item = {
		id: number;
		title: string;
		body: string;
		url: string;
		createdDate: string;
	};
}
