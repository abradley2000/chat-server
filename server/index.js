const express = require('express');
const messages_controller = require('./controllers/messages_controller');
const app = express();

app.use(express.json());
app.use(express.static('server/../public/build'))

const messagesBaseUrl = '/api/messages';
app.post(messagesBaseUrl, messages_controller.create)
app.get(messagesBaseUrl, messages_controller.read)
app.put(`${messagesBaseUrl}/:id`, messages_controller.update)
app.delete(`${messagesBaseUrl}/:id`, messages_controller.delete)

const port = 3001;
app.listen(port, () => {
    console.log(`port ${port}`)
});

