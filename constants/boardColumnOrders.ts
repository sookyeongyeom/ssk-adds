import {
	ResponseFAQKeys,
	ResponseMemberKeys,
	ResponseNewsKeys,
	ResponseNoticeKeys,
	ResponsePaperKeys,
	ResponsePublicationKeys,
	ResponseResourceKeys,
	ResponseCommonKeys,
} from './responseKeys';

export const BoardColumnOrders = {
	member: new Map()
		.set(ResponseMemberKeys.id, '번호')
		.set(ResponseMemberKeys.name, '이름')
		.set(ResponseMemberKeys.responsibility, '역할'),
	publication: new Map()
		.set(ResponsePublicationKeys.id, '번호')
		.set(ResponsePublicationKeys.title, '제목')
		.set(ResponsePublicationKeys.writer, '작성자'),
	resource: new Map()
		.set(ResponseResourceKeys.id, '번호')
		.set(ResponseResourceKeys.title, '제목')
		.set(ResponseResourceKeys.writer, '작성자')
		.set(ResponseResourceKeys.createdDate, '날짜'),
	paper: new Map()
		.set(ResponsePaperKeys.id, '번호')
		.set(ResponsePaperKeys.title, '제목')
		.set(ResponsePaperKeys.researcherName, '연구자')
		.set(ResponsePaperKeys.doi, 'DOI'),
	notice: new Map()
		.set(ResponseNoticeKeys.id, '번호')
		.set(ResponseNoticeKeys.title, '제목')
		.set(ResponseNoticeKeys.writer, '작성자')
		.set(ResponseNoticeKeys.createdDate, '날짜'),
	news: new Map()
		.set(ResponseNewsKeys.id, '번호')
		.set(ResponseNewsKeys.title, '제목')
		.set(ResponseNewsKeys.createdDate, '날짜'),
	faq: new Map()
		.set(ResponseFAQKeys.id, '번호')
		.set(ResponseFAQKeys.title, '제목')
		.set(ResponseFAQKeys.category, '분류')
		.set(ResponseFAQKeys.createdDate, '날짜'),
	mobile: new Map() //
		.set(ResponseCommonKeys.id, '번호')
		.set(ResponseCommonKeys.title, '제목'),
} as const;
