import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import notesData from '../data/notes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const noteRouter = express.Router();

noteRouter.get('/', (req, res) => {
    res.status(200).json(notesData);
})

noteRouter.get('/:noteId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/notes.html'))
})

export default noteRouter;