import { GuildChannel, GuildMember, Message } from 'discord.js';
import axios from 'axios';

export class MessageLogger {

  private uri: string = 'https://message-logger.dev.shortbyte.me';

  private accessToken: string;

  constructor(accessToken: string, options?: { uri: string }) {
    this.accessToken = accessToken;

    if(options)
      this.uri = options.uri;
  }

  public reportMessage(sender: GuildMember, message: Message) {
    const { guild, member, mentions } = message;

    const channels: object[] = [];
    const members: object[] = [];
    const roles: object[] = [];

    mentions.channels.forEach((channel) => {
      if(!(channel instanceof GuildChannel))
        return;
      channels.push({
        id: channel.id,
        name: channel.name
      });
    });

    mentions.roles.forEach((role) => {
      roles.push({
        id: role.id,
        name: role.name,
        color: role.hexColor
      });
    });

    mentions.members.forEach((member) => {
      members.push({
        id: member.id,
        displayName: member.displayName,
        username: member.user.username,
        discriminator: member.user.discriminator
      });
    });

    const body = {
      server: {
        id: guild.id,
        name: guild.name,
        icon: guild.iconURL({ size: 256 })
      },
      sender: {
        id: sender.id,
        displayName: sender.displayName,
        username: sender.user.username,
        discriminator: sender.user.discriminator,
        color: sender.displayHexColor,
        avatar: sender.user.displayAvatarURL({ size: 256 })
      },
      target: {
        id: member.id,
        displayName: member.displayName,
        username: member.user.username,
        discriminator: member.user.discriminator,
        color: member.displayHexColor,
        avatar: member.user.displayAvatarURL({ size: 256 })
      },
      content: message.content,
      mentions: {
        channels: channels,
        members: members,
        roles: roles
      },
      timestamp: message.createdTimestamp
    }

    return new Promise((resolve, reject) => {
      axios.post(`${this.uri}/log`, body, {
        headers: {
          'Authorization': this.accessToken
        }
      }).then((response) => {
        if(response.status === 201)
          return resolve(response.data.uri);
        reject(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}