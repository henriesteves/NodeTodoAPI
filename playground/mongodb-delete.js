const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connect to MongoDB server');

    // deleteMany // apaga todos os que combinam com o critério
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne // apaga o primeiro
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // findAndDelete // apaga o primeiro
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });


    // db.collection('Users').deleteMany({ name: 'Henrique' }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({ _id: new ObjectID('59f72dea920475389034d16f') }).then((result) => {
    //     console.log(result);
    // })

    //db.close();
});