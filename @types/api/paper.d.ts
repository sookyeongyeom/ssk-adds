export namespace RequestPaper {
	type Get = {
		page: number;
		size?: number;
	};
}

export namespace ResponsePaper {
	type Get = {
		items: Item[];
		total: number;
		page: number;
		size: number;
	};

	type Item = {
		id: number;
		title: string;
		year: string;
		keywords: string;
		researcher_name: string;
		doi: string;
	};
}
