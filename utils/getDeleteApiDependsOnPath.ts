import { Paths } from '../constants/paths';
import { deleteResource } from '../api/resource';
import { deleteNotice } from '../api/notice';
import { deleteMember } from '../api/member';
import { deletePublication } from '../api/publication';
import { deletePaper } from '../api/paper';

export default function getDeleteApiDependsOnPath(basePath: string) {
	switch ('/' + basePath.split('/').slice(-1)[0]) {
		case Paths.member:
			return deleteMember;
		case Paths.publication:
			return deletePublication;
		case Paths.resource:
			return deleteResource;
		case Paths.paper:
			return deletePaper;
		case Paths.notice:
			return deleteNotice;
		case Paths.news:
		case Paths.faq:
		case Paths.contact:
		default:
			console.log('Delete API가 할당되지 않았습니다.');
			return null;
	}
}
