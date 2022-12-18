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
} as const;

export const ResponseMemberKeys: ResponseMember.Item = {
	id: 'id' as any,
	name: 'name',
	email: 'email',
	homepage: 'homepage',
	phone_number: 'phone_number',
	intro_body: 'intro_body',
	job_title: 'job_title',
	img: 'img',
	responsibility: 'responsibility',
} as const;

export const ResponsePublicationKeys: ResponsePublication.Item = {
	id: 'id' as any,
	writer: 'writer',
	title: 'title',
	pdf: 'pdf',
	img: 'img',
};

export const ResponseResourceKeys: ResponseResource.Item = {
	id: 'id' as any,
	writer: 'writer',
	title: 'title',
	body: 'body',
	file: 'file',
	created_date: 'created_date',
} as const;

export const ResponsePaperKeys: ResponsePaper.Item = {
	id: 'id' as any,
	title: 'title',
	year: 'year',
	keywords: 'keywords',
	researcher_name: 'researcher_name',
	doi: 'doi',
};

export const ResponseNoticeKeys: ResponseNotice.Item = {
	id: 'id' as any,
	writer: 'writer',
	title: 'title',
	body: 'body',
	file: 'file',
	created_date: 'created_date',
} as const;

export const ResponseNewsKeys: ResponseNews.Item = {
	id: 'id' as any,
	title: 'title',
	body: 'body',
	url: 'url',
	created_date: 'created_date',
};

export const ResponseFAQKeys: ResponseFAQ.Item = {
	id: 'id' as any,
	writer: 'writer',
	title: 'title',
	category: 'category',
	reply: 'reply',
	created_date: 'created_date',
};

export const ResponseContactKeys: ResponseContact.Item = {
	id: 'id' as any,
	body: 'body',
	email: 'email',
	phone_number: 'phone_number',
	way_to_lab: 'way_to_lab',
};
