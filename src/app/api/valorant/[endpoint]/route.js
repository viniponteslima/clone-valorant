export async function GET(request, { params }) {
  const { endpoint } = params;

  return fetch(`https://valorant-api.com/v1/${endpoint}?language=pt-BR`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(resp => {
      if (!resp.ok) {
        return new Response(
          JSON.stringify({error: 'Falha ao buscar os dados da API externa'}),
          {status: resp.status, headers: {'Content-Type': 'application/json'}}
        )
      }
      return resp.json()
    })
    .then(data => {
      return new Response(JSON.stringify(data.data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    })
    .catch(err => {
      return new Response(
        JSON.stringify({ error: `Erro ao conectar à API externa: ${err}` }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    });

}
