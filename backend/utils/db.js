const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});
client.connect();

const db = client.db('easy_tp');
const users = db.collection('users');

module.exports = {
    client,
    db,
    users,
};