const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) =>{
    MongoClient.connect('mongodb+srv://jp:StHp4Uf2RjvD27DD@cluster0-c95ia.mongodb.net/shop?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology:true })       
    .then( client => {
        console.log('Connected');
        _db = client.db();
        cb(client);
    })
    .catch(err => console.log(err));
};

const getDb = () =>{
    if(_db){
        return _db;
    }
    throw 'No database found !';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
