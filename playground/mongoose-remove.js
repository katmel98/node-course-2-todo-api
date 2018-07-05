const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Borrado general, NO RETORNA LOS DOCUMENTOS ELIMINADOS
// Todo.remove({}).then((result) => {
//     console.log(result);
// })
// Borrado PARTICULAR, RETORNA LOS DOCUMENTOS ELIMINADOS
// Todo.findOneAndRemove().then((doc) => {

// });

// Borrado PARTICULAR POR ID, RETORNA LOS DOCUMENTOS ELIMINADOS
Todo.findByIdAndRemove('5b3d38eee9f98521cb3a3281').then((todo) => {
    console.log(todo);
});