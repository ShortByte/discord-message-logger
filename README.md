<div align="center">
  <h1>Discord Message Logger</h1>

  <p>
    <a href="https://discord.gg/Kc7m3Ug" title="My Discord Server">
      <img src="https://img.shields.io/discord/325738511363866626?label=Discord&style=for-the-badge" alt="My Discord Server" />
    </a>
    <a href="https://www.npmjs.com/package/discord-message-logger">
      <img src="https://img.shields.io/npm/v/discord-message-logger.svg?maxAge=3600&style=for-the-badge" alt="NPM version" />
    </a>
    <a href="https://www.npmjs.com/package/discord-message-logger">
      <img src="https://img.shields.io/npm/dt/discord-message-logger.svg?maxAge=3600&style=for-the-badge" alt="NPM downloads" />
    </a>
    <a href="https://www.buymeacoffee.com/ShortByte" title="Donate to this project using Buy Me A Coffee">
      <img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-orange.svg?style=for-the-badge" alt="Buy Me A Coffee donate button" />
    </a>
    <a href="https://twitter.com/ShortByteYT" title="My Twitter">
      <img src="https://img.shields.io/twitter/follow/ShortByteYT?style=for-the-badge" alt="My Twitter" />
    </a>
    <a href="https://twitch.tv/ShortByte" title="My Twitch">
      <img src="https://img.shields.io/twitch/status/ShortByte?style=for-the-badge" alt="My Twitch" />
    </a>
  </p>
</div>

## About

Discord Message Logger is an addon for [discord.js](https://www.npmjs.com/package/discord.js). It makes it easy to report messages or render Discord messages on the web.

## Installation

**Node.js 16.6.0 or newer is required and requires discord.js**  

```sh-session
npm install discord.js 
yarn add discord.js
pnpm add discord.js
```

## Example usage

```js
const { Client, Intents } = require('discord.js');
const { MessageLogger } = require('discord-message-logger');
// OR
import { Client, Intents } from 'discord.js';
import { MessageLogger } from 'discord-message-logger';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const messageLogger = new MessageLogger('ACCESS TOKEN REQUIRED');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  const uri = await messageLogger.reportMessage(REPORT_USER, message);
});

client.login('token');
```

## You want an access token?
You want to use the library? Then write me on Discord! ShortByte#9115

## 🤝 Contributing

Contributions, issues and feature requests are welcome.<br />
Feel free to check [issues page](https://github.com/ShortByte/discord-message-logger/issues) if you want to contribute.<br />


## 🙏 Support

<p><a href="https://www.buymeacoffee.com/ShortByte"> <img  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="ShortByte" /></a></p>

## 📝 License

Copyright © 2021 [Leon Enneken](https://github.com/ShortByte).<br />
This project is GPL-2.0 licensed.

---

Developed with ❤️ by Enneken Solutions in Cologne!