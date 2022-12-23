export namespace RequestPaper {
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
		year: string;
		keywords: string;
		researcherName: string;
		doi: string;
	};

	type Put = {
		id: number;
		title: string;
		year: string;
		keywords: string;
		researcherName: string;
		doi: string;
	};

	type Delete = {
		id: number;
	};
}

export namespace ResponsePaper {
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
		year: string;
		keywords: string;
		researcherName: string;
		doi: string;
	};

	type Post = Item;

	type Put = string;
}
