import { ReactElement } from 'react';
import CustomHead from '../../../../components/Seo/CustomHead';
import { Seo } from '../../../../constants/seo';
import { useRouter } from 'next/router';
import AdminLayout from '../../../../components/Layout/AdminLayout';
import NewsEditPage from '../../../../components/Admin/News/NewsEditPage';

export default function edit() {
	const router = useRouter();
	const id = router.query.id;

	return (
		<>
			<CustomHead title={Seo.Title.news} />
			<NewsEditPage id={Number(id)} />
		</>
	);
}

edit.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
