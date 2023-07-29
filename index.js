const bad_words = require('bad-words') 
const filter = new bad_words({ placeHolder: '#' })
const superagent = require('superagent');

module.exports = {
    async generate(prompt) {
        // --<Checking>--
        if (!prompt) throw new TypeError('Please provide a valid prompt!')
        if (typeof prompt !== 'string') throw new TypeError('Prompt should be a string!')
        if (filter.isProfane(prompt)) return false;
        // --<Generate Image>--
        try {
            const image = await superagent.post(`https://backend.craiyon.com/generate`).send({ prompt: prompt })
        // --<Buffer Images>--
            let results = []
            for (let i = 0; i < 9; i++) {
               let result = Buffer.from(image.body.images[i], 'base64')
               results.push(result)
            }
        return results;
        } catch(e) {
            throw new TypeError(`Couldnt generate prompt!\n${e}`)
        }
    }
}