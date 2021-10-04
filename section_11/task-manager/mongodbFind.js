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

    db.collection('users').findOne({name: 'Kelly'}, (error, user) => {
        if(error){
            return console.log(error);
        }

        console.log(user)
    })


    db.collection('users').findOne({_id: new ObjectId('615a16d47f835ca52c71fb83')}, (error, user) => {
        if(error){
            return console.log(error);
        }

        console.log(user)
    })

    db.collection('users').find({age: 27}).toArray((error, users) => {
        if(error){
            return console.log(error);
        }
        console.log(users)
    })

    db.collection('users').find({age: 27}).count((error, count) => {
        if(error){
            return console.log(error);
        }
        console.log(count)
    })


    db.collection('tasks').findOne({_id : new ObjectId('615a16d47f835ca52c71fb85')},(error, task) => {
        if(error){
            return console.log(error);
        }
        console.log(task)
    })

    db.collection('tasks').find({complete : false}).toArray((error, tasks) => {
        if(error){
            return console.log(tasks);
        }
        console.log(tasks)
    })



    //console.log(db);
    //console.log('Connected');

})