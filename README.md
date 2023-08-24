# djs-ts-boilerplate

A boilerplate to get a bot running using [discord.js](https://discord.js.org/#/) with TypeScript. Includes support for all current Discord interaction types and client events.

1. Clone the repository.

2. Run `pnpm install`.

3. Create a `.env` file then add your client id and bot token from the [Discord Developer Portal](https://discord.com/developers/applications).

4. Create interactions in `src/interaction/<type>` and event handlers in `src/events`. **File names must exactly match the discord.js event name or interaction id/name** as this is how the interactionCreate finds the correct execution.

5. Remove the `.gitkeep` files in any interaction directories you are not using. 

6. Run `pnpm dev` to start the bot and restart on file changes.

7. Run `pnpm deploy-commands` to push command changes to Discord.
