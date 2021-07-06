export async function fetchData(endpoint: string) {
	return await fetch(`http://localhost:3333/${endpoint}`).then((response) =>
		response.json()
	);
}
