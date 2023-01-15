export default function breakLineByAt(string: string) {
	if (!string.includes('@')) {
		console.log('유효하지 않은 이메일 주소입니다.');
		return string;
	}
	const splitedByAt = string.split('@');
	return splitedByAt[0] + '\n@' + splitedByAt[1];
}
