import { EditPageInnerShellProps } from '../../../@types/pages';
import useInput from '../../../hooks/useInput';
import { useState, useEffect } from 'react';
import useGet from '../../../hooks/useGet';
import useRoute from '../../../hooks/useRoute';
import { Paths } from '../../../constants/paths';
import { getContact, putContact } from '../../../api/contact';
import { ResponseContact } from '../../../@types/api/contact';
import ContactEdit from './ContactEdit';
import usePhoneNumbers from '../../../hooks/usePhoneNumbers';
import stringToJson from '../../../utils/stringToJson';

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
	const { onRouteToPath } = useRoute(Paths.admin + Paths.contact);
	const { value: email, onChange: onChangeEmail } = useInput(data && data[0]?.email);
	/* prettier-ignore */
	const { value: wayToLab, onChange: onChangeWayToLab } = useInput(data && data[0]?.wayToLab);
	/* prettier-ignore */
	const { phoneNumbers, onChangeName, onChangePhoneNumber } = usePhoneNumbers(data && stringToJson(data[0]?.phoneNumber));

	const onSubmit = async () => {
		/* PUT */
		const res = await putContact({
			email,
			phoneNumber: JSON.stringify(phoneNumbers),
			wayToLab,
		});
		onRouteToPath();
	};

	return (
		<>
			<ContactEdit
				email={email}
				phoneNumbers={phoneNumbers}
				wayToLab={wayToLab}
				onChangeEmail={onChangeEmail}
				onChangeName={onChangeName}
				onChangePhoneNumber={onChangePhoneNumber}
				onChangeWayToLab={onChangeWayToLab}
				onSubmit={onSubmit}
			/>
		</>
	);
}
