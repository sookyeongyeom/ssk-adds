import { toSnake } from 'snake-camel';
import { RequestNews, ResponseNews } from '../@types/api/news';
import request from './core';

const baseUrl = '/community/press';

export const getNews = ({ page }: RequestNews.Get) => {
	const url = `${baseUrl}?page=${page}`;
	return request.get<ResponseNews.Get>(url);
};

export const getNewsById = ({ id }: RequestNews.GetById) => {
	const url = `${baseUrl}/${id}`;
	return request.get<ResponseNews.GetById>(url);
};

export const postNews = (data: RequestNews.Post) => {
	const url = `${baseUrl}`;
	return request.post<ResponseNews.Post, RequestNews.Post>(url, toSnake({ id: 0, ...data }));
};

export const putNews = (data: RequestNews.Put) => {
	const url = `${baseUrl}/${data.id}`;
	return request.put<ResponseNews.Put, RequestNews.Put>(url, toSnake(data));
};

export const deleteNews = ({ id }: RequestNews.Delete) => {
	const url = `${baseUrl}/${id}`;
	return request.delete(url);
};
