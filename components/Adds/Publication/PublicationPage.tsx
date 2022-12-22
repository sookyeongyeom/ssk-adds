import styled from 'styled-components';
import { Recipes } from '../../../styles/recipes';
import SelectBox from '../../Element/Adds/SelectBox';

export default function PublicationPage() {
	return (
		<S.PublicationPageLayout>
			<SelectBox options={['최신순 정렬']} />
		</S.PublicationPageLayout>
	);
}

namespace S {
	export const PublicationPageLayout = styled.div`
		${Recipes.AlignSelectBoxForBoard}
	`;
}
