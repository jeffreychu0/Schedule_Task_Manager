import { pool } from '../config/database.js'

const retrieveAllQuery = `
    SELECT * FROM notes ORDER BY id ASC;
`

const getNotes = async (req, res) => {
    try {
        const results = await pool.query(retrieveAllQuery)

        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
} 

export default {
    getNotes
}