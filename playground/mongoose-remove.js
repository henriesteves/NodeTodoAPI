const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove
// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({ _id: '59f9bb91c2db046d9ebf65a8' }).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('59f9bb91c2db046d9ebf65a8').then((todo) => {
    console.log(todo);
});
