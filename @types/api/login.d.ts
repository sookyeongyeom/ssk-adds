export namespace RequestLogin {
	type Post = {
		username: string;
		password: string;
	};
}

export namespace ResponseLogin {
	type Post = {
		access_token: string;
		token_type: string;
	};
}
