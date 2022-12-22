import { getResourceById } from '../../../api/resource';
import { useEffect, useState } from 'react';
import useGet from '../../../hooks/useGet';
import { ResponseResource } from '../../../@types/api/resource';
import { ViewPageProps } from '../../../@types/pages';
import EditPageInnerShell from '../../Element/Admin/EditPageInnerShell';
import { Paths } from '../../../constants/paths';

export default function ResourceEditPage({ id }: ViewPageProps) {
	const [resource, setResource] = useState<ResponseResource.GetById>();

	useEffect(() => {
		if (id) useGet(() => getResourceById({ id }), setResource);
	}, [id]);

	return <>{resource && <EditPageInnerShell id={id} data={resource} path={Paths.resource} />}</>;
}
