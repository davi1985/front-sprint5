export async function fetchData(endpoint: string): Promise<Response> {
  return fetch(`http://localhost:3333/${endpoint}`).then((response) =>
    response.json(),
  );
}
