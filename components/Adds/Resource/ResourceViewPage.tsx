import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponseResource } from '../../../@types/api/resource';
import useGet from '../../../hooks/useGet';
import View from '../../Element/Shared/View';
import { getResourceById } from '../../../api/resource';
import { Paths } from '../../../constants/paths';
import { ViewPageProps } from '../../../@types/pages';

export default function ResourceViewPage({ id }: ViewPageProps) {
	const [resource, setResource] = useState<ResponseResource.GetById>();
	const [prev, setPrev] = useState<ResponseResource.GetById>();
	const [next, setNext] = useState<ResponseResource.GetById>();

	useEffect(() => {
		if (id !== undefined && !isNaN(id)) {
			useGet(() => getResourceById({ id }), setResource);
			useGet(() => getResourceById({ id: id - 1 }), setPrev).catch(() => setPrev(undefined));
			useGet(() => getResourceById({ id: id + 1 }), setNext).catch(() => setNext(undefined));
		}
	}, [id]);

	return (
		<S.ResourceViewPageLayout>
			<View
				id={id}
				data={resource!}
				basePath={Paths.adds + Paths.resource}
				prev={prev && { title: prev?.title!, path: Paths.adds + Paths.resource + `/${prev?.id}` }}
				next={next && { title: next?.title!, path: Paths.adds + Paths.resource + `/${next?.id}` }}
			/>
		</S.ResourceViewPageLayout>
	);
}

namespace S {
	export const ResourceViewPageLayout = styled.div``;
}
