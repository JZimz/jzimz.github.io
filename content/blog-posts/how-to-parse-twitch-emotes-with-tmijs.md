---
title: How To Parse Twitch Emotes With tmi.js
description: You don't have to! There's a util for that now.
thumbnail:
---

If you've ever tried to build a Twitch chat bot in JavaScript before, I'm sure you've come across the [tmi.js](https://tmijs.com/) library. It's an incredibly useful wrapper around the Twitch IRC API and I recommend trying it out. **If you want to handle emotes though you'll need to do a little extra work.** Here's how

**The short answer:** Use the [tmi-utils](https://www.npmjs.com/package/tmi-utils) library. I made it so we all don't have to worry about this anymore.

We need this because tmi.js only provides us with the emote id and the positions it is found in the message string. When given the message string _"staying on the map is hard LUL LUL wow"_ we will receive the following in the tags object:

```js
{
  emotes: {
    '425618': [ '27-29', '31-33' ]
  }
}
```

So if you want the emote images to show up you'll need to replace each emote string with an `<img>` tag. I had to write this for a [Twitch chat widget](https://www.etsy.com/listing/1470389712/twitch-chat-widget-with-special-styles) I made recently so I [discussed the solution](https://twitter.com/JZimz/status/1653943961377964032) with the maintainer of tmi.js and turned it into a module so you can use it too!

Here's how I use tmi.js and tmi-utils to embed Twitch emotes into the chat messages I render in the DOM.

```js
import tmi from 'tmi.js'
import { getEmoteAsUrl, parseEmotesInMessage } from 'tmi-utils'

const client = new tmi.Client({
  /* tmi options */
})
client.connect()

client.on('message', (channel, tags, message, self) => {
  // The emotes object is a mapping of emote id to a list
  // of it's positions in the message string. For example,
  //
  // message: staying on the map is hard LUL LUL wow
  // emotes : { 425618: ['27-29', '31-33'] }
  const { emotes } = tags

  // `parseEmotesInMessage` splits the message up into strings and emotes
  const parsedMessage = parseEmotesInMessage(emotes, message)

  // Then you can render the message with emotes however you like
  const message = document.createElement('span')

  // Safely append each part
  parsedMessage.forEach(({ type, value, raw }) => {
    if (type === 'emote') {
      const img = new Image()
      // Converts the emote id to URL
      img.src = getEmoteAsUrl(value)
      // Raw is the original emote text (e.g. LUL)
      img.alt = raw
      img.title = raw

      message.append(img)
    } else {
      message.append(value)
    }
  })

  document.querySelector('.message-list').append(message)
})
```

If you want to learn more or know of a better way, let me know! You can [message me on Twitter](https://twitter.com/JZimz) or come [hangout on Twitch](https://twitch.com/jzimz) sometime.
