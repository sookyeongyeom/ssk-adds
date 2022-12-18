import { RequestNews, ResponseNews } from '../@types/api/news';
import request from './core';

export const getNews = ({ page }: RequestNews.Get) => {
	const url = `/community/press?page=${page}`;
	return request.get<ResponseNews.Get>(url);
};

export const getNewsId = ({ id }: RequestNews.GetById) => {
	const url = `/community/press/${id}`;
	return request.get<ResponseNews.GetById>(url);
};
