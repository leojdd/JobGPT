import OpenAI from 'openai';

import {} from 'dotenv/config'

class chatGptController {
    constructor(apiKey) {
        this.apiKey = apiKey
    }

    async run (messages) {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_ACCESS_TOKEN || this.apiKey, // defaults to process.env["OPENAI_API_KEY"]
          });

        try {
            const chatCompletion = await openai.chat.completions.create({
                messages: messages,
                model: 'gpt-3.5-turbo',
                temperature: 1,
                max_tokens: 356,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0
            });
            
            console.log(chatCompletion.choices);
            console.log(chatCompletion.choices[0].message.content);

            return {
                result: chatCompletion.choices[0].message.content
            }
        } catch (err) { 
            if (err.response) { 
                console.log(err.response.status); 
                console.log(err.response.data); 
            } else { 
                console.log(err.message); 
            } 
        } 
    }
}

export default chatGptController