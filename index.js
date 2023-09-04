const express = require('express');

const app = express();
const port = 3000;

const db = require('./queries');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres CRUD app' })
})

app.get('/topics', db.getTopics)
app.get('/topics/:id', db.getTopicById)
app.post('/topics', db.createTopic)
app.put('/topics/:id', db.updateTopic)
app.delete('/topics/:id', db.deleteTopic)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})