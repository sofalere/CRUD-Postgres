const { Pool } = require("pg");
const dotenv = require("dotenv")

dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const getTopics = (request, response) => {
  pool.query('SELECT * FROM topics ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getTopicById = (request, response) => {
  const id = parseInt(request.params.id, 10)

  pool.query('SELECT * FROM topics WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
}

const createTopic = (request, response) => {
  const { name, comfort } = request.body
  console.log(request.body)
  pool.query('INSERT INTO topics (name, comfort) VALUES ($1, $2) RETURNING *', [name, comfort], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Topic added with ID: ${results.rows[0].id}`)
  })
}

const updateTopic = (request, response) => {
  const id = parseInt(request.params.id, 10)
  const { name, comfort } = request.body

  pool.query(
    'UPDATE topics SET name = $1, comfort = $2 WHERE id = $3',
    [name, comfort, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Topic modified with ID: ${id}`)
    }
  )
}

const deleteTopic = (request, response) => {
  const id = parseInt(request.params.id, 10)

  pool.query('DELETE FROM topics WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Topic deleted with ID: ${id}`)
  })
}

module.exports = {
  getTopics,
  getTopicById,
  createTopic,
  updateTopic,
  deleteTopic,
}