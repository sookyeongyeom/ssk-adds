import styled from 'styled-components';
import { Recipes } from '../../../styles/recipes';
import SelectBox from '../../Element/Adds/SelectBox';

export default function NewsPage() {
	return (
		<S.NewsPageLayout>
			<SelectBox options={['최신순 정렬']} />
		</S.NewsPageLayout>
	);
}

namespace S {
	export const NewsPageLayout = styled.div`
		${Recipes.AlignSelectBoxForBoard}
	`;
}
