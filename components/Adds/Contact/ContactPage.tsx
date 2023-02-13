import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponseContact } from '../../../@types/api/contact';
import useGet from '../../../hooks/useGet';
import { getContact } from '../../../api/contact';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { svgEmail, svgTelephone, svgMap } from '../../../styles/svgs';
import stringToJson from '../../../utils/stringToJson';
import { BoxShadows } from '../../../styles/shadows';
import useMobile from '../../../hooks/useMobile';
import { Devices } from '../../../styles/devices';

export default function ContactPage() {
	const isMobile = useMobile();
	const [contact, setContact] = useState<ResponseContact.Get>();
	const [isHover, setIsHover] = useState(false);

	const onMouseOver = () => !isMobile && setIsHover(true);
	const onMouseLeave = () => !isMobile && setIsHover(false);

	useEffect(() => {
		useGet(getContact, setContact);
	}, []);

	return (
		<S.ContactPageLayout isHover={isHover} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
			<div>
				연구 및 데이터 관련 문의사항은 FAQ를 확인하시고
				<br />
				추가 문의사항은 연락처로 문의 바랍니다
			</div>
			<div>
				<S.SmallCircle isHover={isHover}>
					<div>{svgEmail}</div>
					<div>
						{contact && (
							<>
								{contact[0]?.email.split('@')[0]}
								<br />@{contact[0]?.email.split('@')[1]}
							</>
						)}
					</div>
				</S.SmallCircle>
				<S.BigCircle isHover={isHover}>
					<div>{svgMap}</div>
					<div>{contact && contact[0]?.wayToLab}</div>
				</S.BigCircle>
				<S.SmallCircle isHover={isHover}>
					<div>{svgTelephone}</div>
					<div>
						{!!contact?.length && (
							<>
								{stringToJson(contact[0]?.phoneNumber)[0].name}
								<br />
								{stringToJson(contact[0]?.phoneNumber)[0].phoneNumber}
							</>
						)}
					</div>
				</S.SmallCircle>
				{isMobile && (
					<>
						<S.SmallCircle isHover={isHover}>
							<div>{svgTelephone}</div>
							<div>
								{!!contact?.length && (
									<>
										{stringToJson(contact[0]?.phoneNumber)[1].name}
										<br />
										{stringToJson(contact[0]?.phoneNumber)[1].phoneNumber}
									</>
								)}
							</div>
						</S.SmallCircle>
						<S.SmallCircle isHover={isHover}>
							<div>{svgTelephone}</div>
							<div>
								{!!contact?.length && (
									<>
										{stringToJson(contact[0]?.phoneNumber)[2].name}
										<br />
										{stringToJson(contact[0]?.phoneNumber)[2].phoneNumber}
									</>
								)}
							</div>
						</S.SmallCircle>
					</>
				)}
			</div>
			{!isMobile && (
				<div>
					{!!contact?.length && (
						<>
							<S.ExtraPhoneNumber isHover={isHover}>
								<div>{svgTelephone}</div>
								<div>{stringToJson(contact[0]?.phoneNumber)[1].name}</div>
								<div>{stringToJson(contact[0]?.phoneNumber)[1].phoneNumber}</div>
							</S.ExtraPhoneNumber>
							<S.ExtraPhoneNumber isHover={isHover}>
								<div>{svgTelephone}</div>
								<div>{stringToJson(contact[0]?.phoneNumber)[2].name}</div>
								<div>{stringToJson(contact[0]?.phoneNumber)[2].phoneNumber}</div>
							</S.ExtraPhoneNumber>
						</>
					)}
				</div>
			)}
		</S.ContactPageLayout>
	);
}

namespace S {
	export const ContactPageLayout = styled.div<isHoverType>`
		background-image: ${(props) => props.isHover && 'url(/assets/pattern_contact.png)'};
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		padding-bottom: 10rem;

		/* Announce */
		> div:first-of-type {
			${Fonts.medium20}
			line-height: 170%;
			text-align: center;
			padding: 1.9rem 0 3.9rem 0;

			@media ${Devices.mobile} {
				${Fonts.medium14}
			}
		}

		/* Circle Wrapper */
		> div:nth-of-type(2) {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 4.2rem;
			padding: 3.5rem 0;

			@media ${Devices.mobile} {
				flex-direction: column;
				padding: 0;
				margin-top: 1rem;
				gap: 3rem;
			}
		}

		/* Extra Phone Numbers */
		> div:nth-of-type(3) {
			padding: ${(props) => (!props.isHover ? '3rem 4rem' : '3.5rem 4.5rem')};
			background-color: ${(props) => (!props.isHover ? Colors.blue200 : Colors.white)};
			width: fit-content;
			border-radius: 6.1rem;
			margin: 0 auto;
			margin-top: 3.9rem;
			transition: 0.5s ease;
			display: flex;
		}

		@media ${Devices.mobile} {
			padding-bottom: 0;
		}
	`;

	const Circle = styled.div<isHoverType>`
		border-radius: 50%;
		transition: 0.5s ease;
		background-color: ${(props) => (!props.isHover ? Colors.blue200 : Colors.white)};
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 3rem;

		> div:last-of-type {
			line-height: 150%;
			text-align: center;
			transition: 0.5s ease;
			word-break: keep-all;
		}
	`;

	export const SmallCircle = styled(Circle)<isHoverType>`
		width: ${(props) => (!props.isHover ? '23.5rem' : '20.3rem')};
		height: ${(props) => (!props.isHover ? '23.5rem' : '20.3rem')};

		> div:last-of-type {
			${Fonts.medium18}
		}
	`;

	export const BigCircle = styled(Circle)<isHoverType>`
		width: ${(props) => (!props.isHover ? '29.5rem' : '34.7rem')};
		height: ${(props) => (!props.isHover ? '29.5rem' : '34.7rem')};
		box-shadow: ${(props) => props.isHover && BoxShadows.smooth};
		gap: 1.5rem;

		> div {
			position: relative;
			top: -0.5rem;
		}

		> div:last-of-type {
			${(props) => (!props.isHover ? Fonts.medium16 : Fonts.medium18)}
		}
	`;

	export const ExtraPhoneNumber = styled.div<isHoverType>`
		display: grid;
		grid-template-columns: max-content 1fr;
		column-gap: 3rem;
		row-gap: 1rem;
		align-items: center;
		padding: 0 3rem;

		&:last-of-type {
			border-left: 1px solid ${(props) => (!props.isHover ? Colors.white : Colors.blue300)};
			transition: 0.5s ease;
		}

		> div {
			${Fonts.medium18}
			text-align: center;
		}

		> div:first-of-type {
			grid-row: 1/3;

			svg {
				width: 90%;
			}
		}
	`;
}
