export default function Valorant(endpoint) {
  return fetch(`/api/valorant/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(resp => resp.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
}
