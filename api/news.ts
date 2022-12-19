import { RequestNews, ResponseNews } from '../@types/api/news';
import request from './core';

const baseUrl = '/community/press';

export const getNews = ({ page }: RequestNews.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponseNews.Get>(url);
};

export const getNewsId = ({ id }: RequestNews.GetById) => {
	const url = `${baseUrl}/${id}`;
	return request.get<ResponseNews.GetById>(url);
};
