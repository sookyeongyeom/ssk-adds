import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { ResponseCommonKeys } from '../../../constants/responseKeys';
import AdminButton from '../Admin/AdminButton';
import { useRouter } from 'next/router';
import { Paths } from '../../../constants/paths';
import PageButton from '../Shared/PageButton';
import { Sizes } from '../../../styles/sizes';
import { BoardProps } from '../../../@types/shared';
import { SC } from '../../../styles/styled';

export default function Board({
	dataMaps,
	basePath,
	order,
	currentPage,
	totalPosts,
	size,
	onChangePage,
	isAdmin = false,
}: BoardProps) {
	const router = useRouter();
	const onNew = () => router.push(basePath + Paths.new);

	return (
		<S.BoardLayout>
			{isAdmin && (
				<SC.AlignButtonRight>
					<AdminButton onClick={onNew}>새 글 작성</AdminButton>
				</SC.AlignButtonRight>
			)}
			<S.BoardTable isAdmin={isAdmin}>
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
			</S.BoardTable>
			<div>
				<PageButton
					currentPage={currentPage}
					totalPosts={totalPosts}
					size={size}
					onChangePage={onChangePage}
				/>
			</div>
		</S.BoardLayout>
	);
}

namespace S {
	export const BoardLayout = styled.div``;

	export const BoardTable = styled.table<BoardLayoutProps>`
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
			white-space: nowrap;
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
			${Fonts.regular14}
			padding: 1.3rem;
			white-space: nowrap;

			&:first-of-type {
				${Fonts.medium16}
			}

			&:nth-of-type(2) {
				${Fonts.regular16}
			}
		}

		${(props) => props.isAdmin && AdminStyle}
	`;

	const AdminStyle = css`
		background-color: ${Colors.white};
		border-radius: 0.6rem;
		overflow: hidden;

		> thead {
			background-color: ${Colors.blue400};

			th {
				${Fonts.bold16}
				color: ${Colors.white};
				padding: 1.3rem;
			}
		}

		> tbody > tr:last-of-type {
			border: none;
		}

		> tbody a {
			transition: 0.3s ease;

			&:hover {
				color: ${Colors.blue450};
			}
		}
	`;
}
