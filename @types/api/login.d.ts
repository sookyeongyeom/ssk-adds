export namespace RequestLogin {
	type Post = {
		username: string;
		password: string;
	};
}

export namespace ResponseLogin {
	type Post = {
		accessToken: string;
		tokenType: string;
	};
}
