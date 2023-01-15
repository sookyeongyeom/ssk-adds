export default function getAscendingIndex(currentPage: number, size: number, idx: number) {
	return (currentPage - 1) * size + idx;
}
