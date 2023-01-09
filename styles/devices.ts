export const BreakPoints = {
	general: '1200px',
} as const;

export const Devices = {
	mobile: `(max-width: ${BreakPoints.general})`,
	desktop: `(min-width: ${BreakPoints.general})`,
} as const;
