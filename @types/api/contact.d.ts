export namespace RequestContact {
	type Get = {};
}

export namespace ResponseContact {
	type Get = Item[];

	type Item = {
		id: number;
		body: string;
		email: string;
		phoneNumber: string;
		wayToLab: string;
	};
}
