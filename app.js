const express = require ('express')
const app = express()
const port = 3001

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`The server is running in port http://localhost:${port}`);
})

//Route homepage
app.get('/', (req, res) => {
    
    res.send('Server del mio blog')
})

app.get('/api/v1/bacheca', (req, res) => {
    const articles = [
        {
            id: 1,
            title: 'Il ciambellone',
            contenuto: 'Come fare il ciambellone',
            img: 'img/ciambellone.jpeg',
            tags: ['receipt', 'donut']
        },

        {
            id: 2,
            title: 'Cracker barbabietola',
            contenuto: 'Come fare il cracker barbabietola',
            img: 'img/cracker_barbabietola.jpeg',
            tags: ['receipt', 'cracker', 'beetroot']
        },

        {
            id: 3,
            title: 'Pane fritto dolce',
            contenuto: 'Come fare il pane fritto dolce',
            img: 'img/opane_fritto_dolce.jpeg',
            tags: ['receipt', 'bread', 'fried', 'sweet']
        },

        {
            id: 4,
            title: 'Pasta barbabietola',
            contenuto: 'Come fare il pasta barbabietola',
            img: 'img/pasta_barbabietola.jpeg',
            tags: ['receipt', 'pasta', 'beetroot']
        },

        {
            id: 5,
            title: 'Torta paesana',
            contenuto: 'Come fare il torta paesana',
            img: 'img/torta_paesana.jpeg',
            tags: ['receipt', 'cake']
        }
    ]

    res.json(articles)
})