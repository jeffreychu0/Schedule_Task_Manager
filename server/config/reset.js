import { pool } from './database.js'
import './dotenv.js'
import notesData from '../data/notes.js'

const createTableQuery = `
    DROP TABLE IF EXISTS notes;

    CREATE TABLE IF NOT EXISTS notes (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        details JSONB NOT NULL,
        dueDate VARCHAR(255) NOT NULL
    )
`

const createNotesTable = async () => {
    try {
        const res = await pool.query(createTableQuery);
        console.log("Notes Created Successfully!");
    } catch (err) {
        console.error("Notes Creation FAILED", err);
    }
}

const seedNotesTable = async () => {
    await createNotesTable();

    notesData.forEach((note) => {
        const insertQuery = {
            text: `INSERT INTO notes (name, details, dueDate) VALUES ($1, $2, $3)`
        }

        const values = [
            note.name,
            JSON.stringify(note.details),
            note.dueDate
        ];

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error(`${note.name} Insertion FAILED`, err);
                return
            }

            console.log(`${note.name} Inserted Successfully!`)
        });
    })
}

seedNotesTable();