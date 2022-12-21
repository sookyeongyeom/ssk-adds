import { useState } from 'react';

export default function useEditorBody(initialBody = '') {
	const [body, setBody] = useState(initialBody);
	const onChangeBody = (text: string) => setBody(text);
	return { body, onChangeBody };
}
