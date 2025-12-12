export default async function Valorant(endpoint: string) {
	try {
		const resp = await fetch(`/api/valorant/${endpoint}`);
		if (!resp.ok) return false;
		return await resp.json();
	} catch {
		return false;
	}
}
