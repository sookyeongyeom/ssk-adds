import { useState } from 'react';

export default function useChangePage() {
	const [page, setPage] = useState(1);
	const onChangePage = (page: number) => setPage(page);
	return { page, onChangePage };
}
