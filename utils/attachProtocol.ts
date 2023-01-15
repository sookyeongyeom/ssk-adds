export default function attachProtocol(link: string) {
	const protocol = new RegExp('(http)s*://', 'g');
	if (protocol.test(link)) return link;
	else return 'http://' + link;
}
