// CRUD

/* const mongodb = require('mongodb')
const MongoCliente = mongodb.MongoClient */

const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id)
console.log(id.getTimestamp())
console.log(id.toHexString())

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        _id : id,
        name: 'Kelly',
        age: 27
    }, (error, result) => {
        if(error){
            return console.log('Unable to insert user');
        }
        console.log(result.insertedId)
    })


    db.collection('users').insertMany([
        {
            name: 'Steeven',
            age: 27
        },
        {
            name: 'Kelly',
            age: 28
        },
    ], (error, result) => {
        if(error){
            return console.log('Unable to insert users');
        }
        console.log(result.insertedIds)
    })

    db.collection('tasks').insertMany([
        {
            description: 'Close the window',
            complete: true
        },
        {
            description: 'Send a message',
            complete: false
        },
    ], (error, result) => {
        if(error){
            return console.log('Unable to insert tasks');
        }
        console.log(result.insertedIds)
    })

    //console.log(db);
    //console.log('Connected');

})