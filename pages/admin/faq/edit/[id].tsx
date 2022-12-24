import { ReactElement } from 'react';
import CustomHead from '../../../../components/Seo/CustomHead';
import { Seo } from '../../../../constants/seo';
import { useRouter } from 'next/router';
import AdminLayout from '../../../../components/Layout/AdminLayout';
import FAQEditPage from '../../../../components/Admin/FAQ/FAQEditPage';

export default function edit() {
	const router = useRouter();
	const id = router.query.id;

	return (
		<>
			<CustomHead title={Seo.Title.faq} />
			<FAQEditPage id={Number(id)} />
		</>
	);
}

edit.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
