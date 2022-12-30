export default function stringToJson(string: string) {
	try {
		const json = JSON.parse(string);
		return json;
	} catch (e) {
		console.log(e);
	}
}
