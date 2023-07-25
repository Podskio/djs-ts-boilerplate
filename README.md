# djs-ts-boilerplate

## Usage

Clone the repository or click "use this template" above.

Run `pnpm install`.

Create a `.env` file then add your client id and bot token from the [Discord Developer Portal](https://discord.com/developers/applications).

```
CLIENT_ID=
TOKEN=
```

Create commands in `src/commands` and event handlers in `src/events`.

Run `pnpm dev` to start the bot.

Run `pnpm deploy-commands` to register command changes.
