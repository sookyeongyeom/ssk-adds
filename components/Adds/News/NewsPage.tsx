import styled from 'styled-components';
import { SC } from '../../../styles/styled';
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
		${SC.AlignSelectBoxForBoard}
	`;
}
