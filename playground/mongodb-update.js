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
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b3b299acd88690791462faa")

    // }, {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b3b213023a4c0cfa20c12b9")
    }, {
        $set: {
            name: 'Madelyn'
        },
        $inc: {
            age: 2
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    //client.close();
});