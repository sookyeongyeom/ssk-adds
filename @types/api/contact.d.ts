export namespace RequestContact {
	type Put = {
		id: number;
		email: string;
		phoneNumber: string;
		wayToLab: string;
		body?: string;
	};
}

export namespace ResponseContact {
	type Get = {
		[key: number]: Item;
	};

	type Item = {
		id: number;
		body: string;
		email: string;
		phoneNumber: string;
		wayToLab: string;
	};

	type Put = string;
}
