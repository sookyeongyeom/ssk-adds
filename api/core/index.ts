import axios from 'axios';
import { GenericInstance } from '../../@types/api/core';
import { store } from '../../components/Provider/StoreProvider';

const request: GenericInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACK_END_BASE_URL,
	timeout: 2500,
	headers: { 'Content-Type': 'application/json' },
});

request.interceptors.request.use(
	(config) => {
		const authToken = store.getState().auth.authToken;
		if (authToken) {
			config.headers = {
				Authorization: `Bearer ${authToken}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			};
			config.withCredentials = true;
		}
		return config;
	},
	(error) => {
		console.log(error);
		return Promise.reject(error);
	},
);

request.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default request;
