export function generateUniqueId() {
	const now = Date.now();
	const random = Math.floor(Math.random() * 10000);
	return `${now}_${random}`;
}
