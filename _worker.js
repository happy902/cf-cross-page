export default {
    async fetch(request, env) {
        let url = new URL(request.url);
        if (url.pathname.startsWith('/')) {
            
            let nd = new Date();
            if (nd.getDate() % 2) {
                url.hostname="app1.herokuapp.com";
            } else {
                url.hostname="app2.herokuapp.com";
            }

            let new_request=new Request(url,request);
            return fetch(new_request);
        }
        // Otherwise, serve the static assets.
        return env.ASSETS.fetch(request);
    }
};
