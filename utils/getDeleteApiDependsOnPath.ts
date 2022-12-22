import { Paths } from '../constants/paths';
import { deleteResource } from '../api/resource';
import { deleteNotice } from '../api/notice';

export default function getDeleteApiDependsOnPath(basepath: string) {
	switch ('/' + basepath.split('/').slice(-1)[0]) {
		case Paths.resource:
			return deleteResource;
		case Paths.notice:
			return deleteNotice;
		default:
			return null;
	}
}
