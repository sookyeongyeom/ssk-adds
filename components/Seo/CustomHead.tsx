import Head from 'next/head';

export default function CustomHead({ title, isAdmin }: CustomHeadProps) {
	return (
		<Head>
			<meta charSet='UTF-8' />
			<meta name='viewport' content='user-scalable=no, width=device-width, initial-scale=1' />
			<meta httpEquiv='x-ua-compatible' content='ie=edge' />
			<title>{isAdmin ? `${title} | ADMIN` : `${title} | 연세대학교 ADDS`}</title>
		</Head>
	);
}
