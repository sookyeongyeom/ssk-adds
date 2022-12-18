type AuthActionType = {
	type: string;
	payload: AuthPayloadType;
};

type AuthPayloadType = {
	authToken: string;
};
