export namespace RequestPublication {
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
		pdf: string;
		img: string;
	};

	type Put = {
		id: number;
		writer: string;
		title: string;
		pdf: string;
		img: string;
	};

	type Delete = {
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

	type Post = Item;

	type Item = {
		id: number;
		writer: string;
		title: string;
		pdf: string;
		img: string;
	};

	type Put = string;
}
