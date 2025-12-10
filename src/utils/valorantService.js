export async function valorantFetch(endpoint, revalidate = 3600) {
	const url = `https://valorant-api.com/v1/${endpoint}?language=pt-BR`;

	const resp = await fetch(url, { next: { revalidate } });

	if (!resp.ok) {
		throw new Error("Erro ao buscar os dados da API do Valorant");
	}

	const json = await resp.json();
	return json.data;
}
