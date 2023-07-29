# 🖍 Image generation ai

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/980773006878048279/1134789365273481246/crayon.ai.png" alt="crayon-ai">
</p>

> crayon.ai is an image generator ai based on 'Craiyon' formally known as Dall-E mini

# 📖 More information
- Craiyon already has its own npm package but it only works with api_key
- This package allows you to generate images without api_key

# ⚙ Installation
```
npm i crayon.ai
```

# ✨Features
- Easy to use
- discord.js support
- Works on anything
- Uses backend
- Returns buffer
- Doesnt work with NSFW prompts

# Usage

## Example usage:
```js 
const {generate} = require('crayon.ai')

const images = await generate('Ninja')
console.log(images[0]) // <Buffer>

``` 

## Example discord bot:
```js
// ... discord.js configuration ...
const {generate} = require('crayon.ai')

client.on('messageCreate', async (message) => {
    if (message.content.startsWith('!ai')) {
        const prompt = message.content.slice(4)
        if (!prompt) return message.reply('Please give a prompt!')
        try {
            const images = await generate(prompt)
            if (!image) return message.reply('Your prompt might be nsfw!')
            message.channel.send(`Generating image...`)
            const attachment = new Discord.AttachmentBuilder(images[0], { name: 'ai.png' })
            message.channel.send({ content: `${message.author}, your image has been generated!`, files: [attachment]})
        } catch(e) {
            message.reply(`Oh no! an error occured because of **${e}**`)
        }
    }
})
```

# 👀 Preview
<img src="https://cdn.discordapp.com/attachments/980773006878048279/1134794151897079819/image.png">