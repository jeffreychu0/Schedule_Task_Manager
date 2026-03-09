import express from 'express'
import './config/dotenv.js'
import noteRouter from './routes/notes.js';

const app = express();

const PORT = process.env.PORT | 3001

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'))
app.use('/notes', noteRouter)

app.get('/', (req, res) => {
    res.status(200).send("Schedule Task Manager API")
})

app.use((req, res) => {
    res.status(404).send('Error 404: Not found');
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})