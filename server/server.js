import express from 'express'
import noteRouter from './routes/notes.js';

const app = express();

const PORT = process.env.PORT | 3001

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'))
app.use('/note', noteRouter)

app.get('/', (req, res) => {
    res.status(200).send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})