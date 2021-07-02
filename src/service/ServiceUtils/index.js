export async function fetchData(endpoint) {
	return await fetch(`http://localhost:3333/${endpoint}`).then((response) =>
		response.json()
	);
}
