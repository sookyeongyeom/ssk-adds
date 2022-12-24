export namespace RequestFAQ {
	type Get = {
		page: number;
		size?: number;
	};

	type Post = {
		id?: 0;
		writer: string;
		title: string;
		category: string;
		reply: string;
		createdDate: string;
	};

	type Put = {
		id: number;
		writer: string;
		title: string;
		category: string;
		reply: string;
		createdDate: string;
	};

	type Delete = {
		id: number;
	};
}

export namespace ResponseFAQ {
	type Get = {
		items: Item[];
		total: number;
		page: number;
		size: number;
	};

	type Post = Item;

	type Item = {
		id: number;
		writer: string;
		title: string;
		category: string;
		reply: string;
		createdDate: string;
	};

	type Put = string;
}
