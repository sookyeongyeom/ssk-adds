import Link from 'next/link';
import styled from 'styled-components';
import { ResponseResource } from '../../@types/api/resource';
import { BoardProps } from '../../@types/shared';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

export default function Board<T extends ResponseResource.Get>({ datas }: BoardProps<T>) {
	return (
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
					datas.items.map((data) => (
						<tr>
							<td>{data.id}</td>
							<td>
								<Link href={`${data.id}`}>{data.title}</Link>
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
	);
}

namespace S {
	export const BoardLayout = styled.table`
		width: 100%;
		text-align: center;

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
			padding: 1.2rem;

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
