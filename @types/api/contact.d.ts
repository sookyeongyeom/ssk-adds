export namespace RequestContact {
	type Get = {};
}

export namespace ResponseContact {
	type Get = Item[];

	type Item = {
		id: number;
		body: string;
		email: string;
		phone_number: string;
		way_to_lab: string;
	};
}
