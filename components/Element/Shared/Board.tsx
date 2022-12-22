import Link from 'next/link';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { ResponseCommonKeys } from '../../../constants/responseKeys';
import AdminButton from '../Admin/AdminButton';
import { useRouter } from 'next/router';
import { Paths } from '../../../constants/paths';
import PageButton from '../Shared/PageButton';
import { Sizes } from '../../../styles/sizes';
import { BoardProps } from '../../../@types/shared';

export default function Board({
	dataMaps,
	basePath,
	order,
	currentPage,
	totalPosts,
	onChangePage,
	isAdmin = false,
}: BoardProps) {
	const router = useRouter();
	const onNew = () => router.push(basePath + Paths.new);

	return (
		<div>
			{isAdmin && <AdminButton onClick={onNew}>새 글 작성</AdminButton>}
			<S.BoardLayout>
				<thead>
					<tr>
						{!!dataMaps?.length &&
							Array.from(dataMaps[0]).map(([key]) => <th key={key}>{order.get(key)}</th>)}
					</tr>
				</thead>
				<tbody>
					{!!dataMaps?.length &&
						dataMaps.map((dataMap, i) => (
							<tr key={i}>
								{Array.from(dataMap).map(([key, value], i) => (
									<td key={key}>
										{/* 두번째 컬럼이면 View 링크 생성 */}
										{i === 1 ? (
											<Link href={`${basePath}/${dataMap.get(ResponseCommonKeys.id)}`}>
												{value}
											</Link>
										) : (
											value
										)}
									</td>
								))}
							</tr>
						))}
				</tbody>
			</S.BoardLayout>
			<div>
				<PageButton currentPage={currentPage} totalPosts={totalPosts} onChangePage={onChangePage} />
			</div>
		</div>
	);
}

namespace S {
	export const BoardLayout = styled.table`
		width: 100%;
		text-align: center;

		+ div {
			margin-top: ${Sizes.desktopPageButtonMarginTop};
		}

		> thead {
			background-color: ${Colors.blue100};
		}

		> thead th {
			${Fonts.medium16}
			padding: 1.1rem;
		}

		> thead > tr > th {
			&:first-of-type,
			&:nth-of-type(3) {
				width: 10rem;
			}

			&:last-of-type {
				width: 17.5rem;
			}
		}

		> tbody > tr {
			border-bottom: 0.1rem solid ${Colors.gray100};
		}

		> tbody td {
			padding: 1.3rem;

			&:first-of-type {
				${Fonts.medium16}
			}

			&:nth-of-type(3),
			&:last-of-type {
				${Fonts.regular14}
			}
		}
	`;
}
