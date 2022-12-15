export const Secrets = {
	S3_BASE_URL: process.env.NEXT_PUBLIC_S3_BASE_URL,
	GET_S3_YONSEI_ADDS_PDF_URL: function () {
		return this.S3_BASE_URL + 'adds/Yonsei-ADDS.pdf';
	},
} as const;
