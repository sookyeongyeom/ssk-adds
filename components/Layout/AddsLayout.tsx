import Sidebar from '../Shared/Sidebar';

export default function AddsLayout({ children }: ChildrenType) {
	return (
		<>
			<Sidebar></Sidebar>
			{children}
		</>
	);
}
