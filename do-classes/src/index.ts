import { DurableObject } from "cloudflare:workers";


export class Project extends DurableObject<Env> {
	async fetch(request: Request): Promise<Response> {
		console.log('do-project: fetch', request.url);
		const id = this.env.CONTAINER.idFromName('foo');
		const stub = this.env.CONTAINER.get(id);
		const req = new Request('https://example.com')
		return stub.fetch(req);
	}
}
 
export class Container extends DurableObject<Env> {
	async fetch(request: Request): Promise<Response> {
		console.log('do-container: fetch', request.url);
		return fetch(request)
	}
}
export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response('No', {status:400}	);
	},
} satisfies ExportedHandler<Env>;
