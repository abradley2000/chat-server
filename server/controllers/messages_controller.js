let messages = [];
let id = 0;

module.exports = {
    /*
    create unpacks text & time values from req.body and pushes them to the messages array along with an id
    that will be incremented each time the function runs, then sends the new messages array.
    */
    create: (req, res) => {
        const {text, time} = req.body;
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        const {text} = req.body
        const updateIndex = messages.findIndex(element => element.id === +req.params.id) // returns the index of the first element in the array where predicate is true
        // finds the value in the array that matches the id in the request
        let message = messages[updateIndex] // assigns message to the value in the messages array with the same id as the request
        
        messages[updateIndex] = {
            id: message.id, //unchanged
            text: text || message.text, 
            time: message.time //unchanged
        }

        res.status(200).send(messages) // sends the new messaages array
    },
    delete: (req, res) => {
        const messageIndex = messages.findIndex(element => element.id === +req.params.id)
        messages.splice(messageIndex, 1)
        res.status(200).send(messages)
    } 
}