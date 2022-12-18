import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

export default function AdminBoard({ dataMaps }: AdminBoardProps) {
	return (
		<S.BoardLayout>
			<thead>
				<tr>{dataMaps && Array.from(dataMaps[0]).map(([key]) => <th key={key}>{key}</th>)}</tr>
			</thead>
			<tbody>
				{dataMaps &&
					dataMaps.map((dataMap, i) => (
						<tr key={i}>
							{Array.from(dataMap).map(([key, value]) => (
								<td key={key}>{value}</td>
							))}
						</tr>
					))}
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
