

export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log('do-proxy: fetch', request.url);
		const id: DurableObjectId = env.PROJECT.idFromName('foo');
		const stub = env.PROJECT.get(id);
		const greeting = await stub.fetch(request);
		return greeting;
	},
} satisfies ExportedHandler<Env>;
