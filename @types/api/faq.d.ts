export namespace RequestFAQ {
	type Get = {
		page: number;
		size: number;
	};
}

export namespace ResponseFAQ {
	type Get = {
		items: [
			{
				writer: string;
				id: number;
				title: string;
				category: string;
				reply: string;
				created_date: string;
			},
		];
		total: number;
		page: number;
		size: number;
	};
}
