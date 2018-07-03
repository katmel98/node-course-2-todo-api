// const MongoClient = require('mongodb').MongoClient;

// es6 destructuring variables
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    var db = client.db('TodoApp');
    
    // deleteMany

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });    

    // db.collection('Users').deleteMany({name: 'Melvin'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteOne({_id: new ObjectID("5b3b212f8524e6cfa1e3f7d5")}).then((result) => {
        console.log(result);
    });
    
    //client.close();
});