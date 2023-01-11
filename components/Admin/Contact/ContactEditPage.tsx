import { ResponseFAQ } from '../../../@types/api/faq';
import { EditPageInnerShellProps, ViewPageProps } from '../../../@types/pages';
import useInput from '../../../hooks/useInput';
import { putFAQ, getFAQById } from '../../../api/faq';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useRoute from '../../../hooks/useRoute';
import { Paths } from '../../../constants/paths';
import { getContact, putContact } from '../../../api/contact';
import { ResponseContact } from '../../../@types/api/contact';
import ContactEdit from './ContactEdit';

export default function ContactEditPage() {
	const [contact, setContact] = useState<ResponseContact.Get>();

	useEffect(() => {
		useGet(() => getContact(), setContact);
	}, []);

	return <>{contact && <FAQEditPageInnerShell data={contact} />}</>;
}

function FAQEditPageInnerShell({
	data,
}: Omit<EditPageInnerShellProps<ResponseContact.Get>, 'id' | 'path'>) {
	const { value: email, onChange: onChangeEmail } = useInput(data && data[0].email);
	/* prettier-ignore */
	const { value: phoneNumber, onChange: onChangePhoneNumber } = useInput(data && data[0].phoneNumber);
	/* prettier-ignore */
	const { value: wayToLab, onChange: onChangeWayToLab } = useInput(data && data[0].wayToLab);
	const { onRouteToPath } = useRoute(Paths.admin + Paths.contact);

	const onSubmit = async () => {
		/* PUT */
		const res = await putContact({
			email,
			phoneNumber,
			wayToLab,
		});
		onRouteToPath();
	};

	return (
		<>
			<ContactEdit
				email={email}
				phoneNumber={phoneNumber}
				wayToLab={wayToLab}
				onChangeEmail={onChangeEmail}
				onChangePhoneNumber={onChangePhoneNumber}
				onChangeWayToLab={onChangeWayToLab}
				onSubmit={onSubmit}
			/>
		</>
	);
}
