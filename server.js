

const PORT = 8000 
const express = require('express')
const cors = require('cors')
const { Configuration, OpenAIApi } = require("openai")
const app = express()
app.use(cors())
app.use(express.json())

require('dotenv').config()
const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration)


//route
app.post('/images', async(req, res) =>{
    
    try {
        const response = await openai.createImage({
            prompt: "A multicolor butterfly",
            n: 2,
            size: "1024x1024",
        })
        console.log(response.data.data)
        res.send(response.data.data)
        
    } catch (error) {
        console.error(error)
    }

});


app.listen(PORT, () => console.log('Server running on PORT ' + PORT))