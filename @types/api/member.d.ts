export namespace RequestMember {
	type Get = {
		page?: number;
		size?: number;
	};
}

export namespace ResponseMember {
	type Get = {
		items: [
			{
				id: number;
				name: string;
				email: string;
				homepage: string;
				phone_number: string;
				intro_body: string;
				job_title: string;
				img: string;
				responsibility: string;
				[key: string]: string;
			},
		];
		total: number;
		page: number;
		size: number;
	};
}
