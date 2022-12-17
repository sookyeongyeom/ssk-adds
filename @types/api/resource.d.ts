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
		items: [
			{
				id: number;
				writer: string;
				title: string;
				body: string;
				file: string;
				created_date: string;
			},
		];
		total: number;
		page: number;
		size: number;
	};

	type GetById = {
		id: 0;
		writer: string;
		title: string;
		body: string;
		file: string;
		created_date: string;
	};
}
