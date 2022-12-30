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

	useEffect(() => {
		if (!isNaN(id)) useGet(() => getResourceById({ id }), setResource);
	}, [id]);

	return (
		<>
			<S.ResourceViewPageLayout>
				<View id={id} data={resource!} basePath={Paths.admin + Paths.resource} isAdmin />
			</S.ResourceViewPageLayout>
		</>
	);
}

namespace S {
	export const ResourceViewPageLayout = styled.div``;
}
