import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponseResource } from '../../../@types/api/resource';
import useGet from '../../../hooks/useGet';
import Board from '../../Shared/Board';
import { getResource } from '../../../api/resource';

export default function ResourcePage() {
	const [resource, setResource] = useState<ResponseResource.Get>();

	useEffect(() => {
		useGet(() => getResource({ page: 1 }), setResource);
	}, []);

	return (
		<S.ResourcePageLayout>
			<Board datas={resource!} />
		</S.ResourcePageLayout>
	);
}

namespace S {
	export const ResourcePageLayout = styled.div``;
}
