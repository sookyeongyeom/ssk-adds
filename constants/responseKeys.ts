import { ResponseContact } from '../@types/api/contact';
import { ResponseFAQ } from '../@types/api/faq';
import { ResponseMember } from '../@types/api/member';
import { ResponseNews } from '../@types/api/news';
import { ResponseNotice } from '../@types/api/notice';
import { ResponsePaper } from '../@types/api/paper';
import { ResponsePublication } from '../@types/api/publication';
import { ResponseResource } from '../@types/api/resource';

export const ResponseCommonKeys = {
	id: 'id',
	title: 'title',
} as const;

export const ResponseMemberKeys: ResponseMember.Item = {
	id: 'id' as any,
	name: 'name',
	email: 'email',
	homepage: 'homepage',
	phoneNumber: 'phoneNumber',
	introBody: 'introBody',
	jobTitle: 'jobTitle',
	img: 'img',
	responsibility: 'responsibility',
} as const;

export const ResponsePublicationKeys: ResponsePublication.Item = {
	id: 'id' as any,
	writer: 'writer',
	title: 'title',
	pdf: 'pdf',
	img: 'img',
} as const;

export const ResponseResourceKeys: ResponseResource.Item = {
	id: 'id' as any,
	writer: 'writer',
	title: 'title',
	body: 'body',
	file: 'file',
	createdDate: 'createdDate',
} as const;

export const ResponsePaperKeys: ResponsePaper.Item = {
	id: 'id' as any,
	title: 'title',
	year: 'year',
	keywords: 'keywords',
	researcherName: 'researcherName',
	doi: 'doi',
} as const;

export const ResponseNoticeKeys: ResponseNotice.Item = {
	id: 'id' as any,
	writer: 'writer',
	title: 'title',
	body: 'body',
	file: 'file',
	createdDate: 'createdDate',
} as const;

export const ResponseNewsKeys: ResponseNews.Item = {
	id: 'id' as any,
	title: 'title',
	body: 'body',
	url: 'url',
	createdDate: 'createdDate',
} as const;

export const ResponseFAQKeys: ResponseFAQ.Item = {
	id: 'id' as any,
	writer: 'writer',
	title: 'title',
	category: 'category',
	reply: 'reply',
	createdDate: 'createdDate',
} as const;

export const ResponseContactKeys: ResponseContact.Item = {
	id: 'id' as any,
	body: 'body',
	email: 'email',
	phoneNumber: 'phoneNumber',
	wayToLab: 'wayToLab',
} as const;
