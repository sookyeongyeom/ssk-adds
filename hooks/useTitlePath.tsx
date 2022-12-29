import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Seo } from '../constants/seo';

export default function useTitlePath() {
	const router = useRouter();
	const [title, setTitle] = useState('');
	const [path, setPath] = useState('');

	useEffect(() => {
		const path = router.pathname.split('/')[2];
		setPath('/' + path);
		setTitle(Seo.Title[path]);
	}, [router.pathname]);

	return { title, path };
}
