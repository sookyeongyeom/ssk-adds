import Link from 'next/link';
import styled from 'styled-components';
import { ResponseResource } from '../../../@types/api/resource';
import { BoardProps } from '../../../@types/shared';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { Paths } from '../../../constants/paths';
import { ResponseNotice } from '../../../@types/api/notice';
import PageButton from '../Shared/PageButton';
import { Sizes } from '../../../styles/sizes';

export default function Board<T extends ResponseResource.Get | ResponseNotice.Get>({
	datas,
	isNotice,
	currentPage,
	totalPosts,
	onChangePage,
}: BoardProps<T>) {
	return (
		<>
			<S.BoardLayout>
				<thead>
					<tr>
						<th>번호</th>
						<th>제목</th>
						<th>작성자</th>
						<th>날짜</th>
					</tr>
				</thead>
				<tbody>
					{datas ? (
						datas.items.map((data, i) => (
							<tr key={i}>
								<td>{data.id}</td>
								<td>
									<Link
										href={Paths.adds + (isNotice ? Paths.notice : Paths.resource) + `/${data.id}`}>
										{data.title}
									</Link>
								</td>
								<td>{data.writer}</td>
								<td>{data.created_date}</td>
							</tr>
						))
					) : (
						<>
							<tr>
								<td>2</td>
								<td>
									<Link href=''>ADDS 데이터</Link>
								</td>
								<td>관리자</td>
								<td>2022-12-08</td>
							</tr>
							<tr>
								<td>1</td>
								<td>
									<Link href=''>ADDS 데이터</Link>
								</td>
								<td>관리자</td>
								<td>2022-12-08</td>
							</tr>
						</>
					)}
				</tbody>
			</S.BoardLayout>
			<div>
				<PageButton currentPage={currentPage} totalPosts={totalPosts} onChangePage={onChangePage} />
			</div>
		</>
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
			white-space: nowrap;
			text-overflow: ellipsis;

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
