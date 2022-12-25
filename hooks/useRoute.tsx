import { useRouter } from 'next/router';

export default function useRoute(path: string | undefined = undefined) {
	const router = useRouter();
	const onRouteToHome = () => router.push('/home');
	const onRouteToPath = () => {
		if (path !== undefined) router.push(path);
		else console.log('Path가 할당되지 않았습니다.');
	};
	return { onRouteToHome, onRouteToPath };
}
