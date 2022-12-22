import { useEffect, useState } from 'react';
import useGet from '../../../hooks/useGet';
import { ResponseNotice } from '../../../@types/api/notice';
import { getNoticeById } from '../../../api/notice';
import EditPageInnerShell from '../../Element/Admin/EditPageInnerShell';
import { ViewPageProps } from '../../../@types/pages';
import { Paths } from '../../../constants/paths';

export default function NoticeEditPage({ id }: ViewPageProps) {
	const [notice, setNotice] = useState<ResponseNotice.GetById>();

	useEffect(() => {
		if (id) useGet(() => getNoticeById({ id }), setNotice);
	}, [id]);

	return <>{notice && <EditPageInnerShell id={id} data={notice} path={Paths.notice} />}</>;
}
