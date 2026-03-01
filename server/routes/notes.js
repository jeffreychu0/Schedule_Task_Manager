import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import noteData from '../data/notes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const noteRouter = express.Router();

noteRouter.get('/', (req, res) => {
    res.status(200).json(noteData);
})

noteRouter.get('/:noteId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/note.html'))
})

export default noteRouter;