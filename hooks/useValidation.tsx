import { useValidationTargetsType } from '../@types/hooks';

/* prettier-ignore */
export default function useValidation(onSubmit: () => void, required: useValidationTargetsType) {
	const onValidation = () => {
		for (const item of required) {
			if (item.value.replace(/ /g, '') === '') {
				alert(`[${item.name}] 필드를 채워주세요.`);
				item.ref.current.focus();
				return false;
			}
		}
		onSubmit();
	};
	return onValidation;
}
