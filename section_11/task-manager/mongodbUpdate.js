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

    const updatePromise = db.collection('users').updateOne({ _id: new ObjectId('615a118835740fa60a9afe49')}, {
        $set: {
            name: 'Diana'
        }
    })

    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error);
    })

    // Short
    db.collection('users').updateOne({ _id: new ObjectId('615a118835740fa60a9afe49')}, {
        $set: {
            name: 'Diana'
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error);
    })


    db.collection('users').updateOne({ _id: new ObjectId('615a118835740fa60a9afe49')}, {
        $inc: {
            age: 10
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error);
    })



    db.collection('tasks').updateMany({}, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error);
    })


    //console.log(db);
    //console.log('Connected');

})