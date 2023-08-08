const PORT = 8000 ;
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration)


app.post('/images', async(req, resp) =>{
    
    try {
        const response = await openai.createImage({
            prompt: "A cute baby sea otter",
            n: 2,
            size: "1024x1024",
        })
        resp.send(response.data.data)
        console.log(response)
    } catch (error) {
        console.error(error)
    }

})


app.listen(PORT, () => console.log('Server running on PORT ' + PORT) )