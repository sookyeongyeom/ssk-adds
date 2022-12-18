export namespace RequestPublication {
	type Get = {
		page: number;
		size?: number;
	};

	type GetById = {
		id: number;
	};
}

export namespace ResponsePublication {
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
		pdf: string;
		img: string;
	};
}
