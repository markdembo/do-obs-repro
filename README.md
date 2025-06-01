# Setup

Two Workers.

Worker 1 has two DOs defined: Project and Container

Worker 2 has a binding to the Project DO defined in Worker 1

Request flow:

`Eyeball -> Worker 2 - env.PROJECT.fetch() -> Project DO - env.CONTAINER.fetch() -> Container DO - fetch(example.com)`

# Steps to reproduce

1. Deploy `do-classes` worker
2. Deploy `do-proxy` worker


## Logs tailing

1. Start `npx wrangler tail`
2. Hit URL of `do-proxy` worker
3. See invocation logs - Success


## Workers Logs

1. Navigate to `do-proxy` worker in dash
2. Hit URL of `do-proxy` worker
3. Wait 5 minutes
4. No logs
5. Navigate to `do-classes` worker in dash
6. Also no logs
