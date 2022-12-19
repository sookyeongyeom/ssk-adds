import { useState } from 'react';

export default function useEditorBody() {
	const [body, setBody] = useState('');
	const onChangeBody = (text: string) => setBody(text);
	return { body, onChangeBody };
}
