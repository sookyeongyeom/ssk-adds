import { useState } from 'react';

export default function useKeywords(initialKeywords: string[] = ['']) {
	const [keywords, setKeywords] = useState<string[]>([...initialKeywords]);

	const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
		const copy = [...keywords];
		copy[idx] = e.target.value;
		setKeywords(copy);
	};

	const onAddKeyword = () => {
		const copy = [...keywords];
		copy.push('');
		setKeywords(copy);
	};

	const onRemoveKeyword = (idx: number) => {
		if (keywords.length === 1) {
			alert('하나 이상의 키워드를 등록해야합니다.');
			setKeywords(['']);
			return;
		}
		const copy = [...keywords];
		copy.splice(idx, 1);
		setKeywords(copy);
	};

	return { keywords, onChangeKeyword, onAddKeyword, onRemoveKeyword };
}
