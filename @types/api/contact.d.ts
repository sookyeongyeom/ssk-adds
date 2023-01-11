export namespace RequestContact {
	type Put = {
		id?: number;
		body?: string;
		email: string;
		phoneNumber: string;
		wayToLab: string;
	};
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

	type Put = string;
}
