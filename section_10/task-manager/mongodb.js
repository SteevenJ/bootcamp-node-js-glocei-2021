// CRUD

/* const mongodb = require('mongodb')
const MongoCliente = mongodb.MongoClient */

const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName)



    db.collection('users').deleteMany({ 
        age: 27
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })


    db.collection('tasks').deleteOne({ 
        description: "Send a message"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })



    //console.log(db);
    //console.log('Connected');

})