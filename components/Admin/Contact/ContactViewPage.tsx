import { useState, useEffect } from 'react';
import { Paths } from '../../../constants/paths';
import useGet from '../../../hooks/useGet';
import { SC } from '../../../styles/styled';
import AdminView from '../../Element/Admin/AdminView';
import { getContact } from '../../../api/contact';
import { ResponseContact } from '../../../@types/api/contact';
import useRoute from '../../../hooks/useRoute';
import stringToJson from '../../../utils/stringToJson';

export default function ContactViewPage() {
	const basePath = Paths.admin + Paths.contact;
	const [contact, setContact] = useState<ResponseContact.Get>();
	const { onRouteToPath: onEdit } = useRoute(basePath + Paths.edit);

	useEffect(() => {
		useGet(() => getContact(), setContact);
	}, []);

	return (
		<div>
			<AdminView id={1} basePath={basePath} onEdit={onEdit}>
				<SC.Label>이메일</SC.Label>
				<div>{contact && contact[0].email}</div>
				<SC.Label>연락처</SC.Label>
				<div>
					<ul>
						{contact &&
							stringToJson(contact[0].phoneNumber).map(
								(phoneNumber: PhoneNumberType, i: number) => (
									<li key={i}>
										{phoneNumber.name} : {phoneNumber.phoneNumber}
									</li>
								),
							)}
					</ul>
				</div>
				<SC.Label>위치</SC.Label>
				<div>{contact && contact[0].wayToLab}</div>
			</AdminView>
		</div>
	);
}
