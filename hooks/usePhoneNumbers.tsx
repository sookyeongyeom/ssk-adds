import { useState } from 'react';
import produce from 'immer';
import { PhoneNumberType } from '../@types/hooks';
import { DefaultPhoneNumbers } from '../models/phoneNumbers';

export default function usePhoneNumbers(
	initialPhoneNumbers: PhoneNumberType[] = DefaultPhoneNumbers,
) {
	const [phoneNumbers, setPhoneNumbers] = useState(initialPhoneNumbers);

	const onChangeName = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
		const changed = produce(phoneNumbers, (draft) => {
			draft[idx].name = e.target.value;
		});
		setPhoneNumbers(changed);
	};

	const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
		const changed = produce(phoneNumbers, (draft) => {
			draft[idx].phoneNumber = e.target.value;
		});
		setPhoneNumbers(changed);
	};

	return { phoneNumbers, onChangeName, onChangePhoneNumber };
}
