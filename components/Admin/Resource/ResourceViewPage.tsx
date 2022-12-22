import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponseResource } from '../../../@types/api/resource';
import useGet from '../../../hooks/useGet';
import View from '../../Element/Shared/View';
import { getResourceById } from '../../../api/resource';
import { Paths } from '../../../constants/paths';
import AdminButton from '../../Element/Admin/AdminButton';
import { useRouter } from 'next/router';
import { ViewPageProps } from '../../../@types/pages';

export default function ResourceViewPage({ id }: ViewPageProps) {
	const [resource, setResource] = useState<ResponseResource.GetById>();
	const [prev, setPrev] = useState<ResponseResource.GetById>();
	const [next, setNext] = useState<ResponseResource.GetById>();

	const router = useRouter();
	const onEdit = () => router.push(Paths.admin + Paths.resource + Paths.edit + `/${id}`);

	useEffect(() => {
		if (!isNaN(id)) {
			useGet(() => getResourceById({ id }), setResource);
			useGet(() => getResourceById({ id: id - 1 }), setPrev).catch(() => setPrev(undefined));
			useGet(() => getResourceById({ id: id + 1 }), setNext).catch(() => setNext(undefined));
		}
	}, [id]);

	return (
		<>
			<AdminButton onClick={onEdit}>수정</AdminButton>
			<S.ResourceViewPageLayout>
				<View
					data={resource!}
					boardPath={Paths.admin + Paths.resource}
					prev={
						prev && { title: prev?.title!, path: Paths.admin + Paths.resource + `/${prev?.id}` }
					}
					next={
						next && { title: next?.title!, path: Paths.admin + Paths.resource + `/${next?.id}` }
					}
				/>
			</S.ResourceViewPageLayout>
		</>
	);
}

namespace S {
	export const ResourceViewPageLayout = styled.div``;
}
