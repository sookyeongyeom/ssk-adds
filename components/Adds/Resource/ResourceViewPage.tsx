import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponseResource } from '../../../@types/api/resource';
import useGet from '../../../hooks/useGet';
import View from '../../Shared/View';
import { getResourceById } from '../../../api/resource';

export default function ResourceViewPage({ id }: ResourceViewPageProps) {
	const [resource, setResource] = useState<ResponseResource.GetById>();

	useEffect(() => {
		if (!isNaN(id)) useGet(() => getResourceById({ id }), setResource);
	}, [id]);

	return (
		<S.ResourceViewPageLayout>
			<View data={resource!} />
		</S.ResourceViewPageLayout>
	);
}

namespace S {
	export const ResourceViewPageLayout = styled.div``;
}
