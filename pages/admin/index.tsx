import { ReactElement } from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';

export default function index() {
	return <></>;
}

index.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
