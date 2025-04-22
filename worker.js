addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const data = {
    "status": "success",
    "message": "https://D1zT.erhdvbvytrjt.es/qhP3o9/"
  }
  
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
