export default function Agents(endpoint) {
  return fetch(`https://valorant-api.com/v1/${endpoint}?language=pt-BR`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(resp => resp.json())
    .then(data => {
      return data.data;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
}
