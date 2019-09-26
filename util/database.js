const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (cb) =>{
    MongoClient.connect('mongodb+srv://jp:mongoJP1986@cluster0-c95ia.mongodb.net/test?retryWrites=true&w=majority')
    .then( client => {
        console.log('Connected');
        cb(client);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;
