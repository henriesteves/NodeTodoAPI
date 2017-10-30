//const MongoClient = require('mongodb').MongoClient;
//const { MongoClient } = require('mongodb'); // mesmo que a linha de cima
const { MongoClient, ObjectID } = require('mongodb');

// var user = { name: 'Henrique', age: 36 };
// var{ name } = user; // pega uma propriedade o objeto e transforma em uma variavel
// console.log(name);

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 

    console.log('Connect to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2)); // ou apenas console.log(result.ops)
    // });

    // db.collection('Users').insertOne({
    //     //_id: 123,
    //     name: 'Henrique',
    //     age: 36,
    //     location: 'Araçatuba'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id);
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});