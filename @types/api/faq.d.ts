export namespace RequestFAQ {
	type Get = {
		page: number;
		size?: number;
	};
}

export namespace ResponseFAQ {
	type Get = {
		items: Item[];
		total: number;
		page: number;
		size: number;
	};

	type Item = {
		writer: string;
		id: number;
		title: string;
		category: string;
		reply: string;
		createdDate: string;
	};
}
