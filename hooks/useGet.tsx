export default async function useGet(api: any, dispatch: any) {
	const res = await api();
	dispatch(res);
}
