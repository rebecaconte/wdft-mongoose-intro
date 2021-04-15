const mongoose = require('mongoose');


let MyModel = require('./models/MyModel')


mongoose.connect('mongodb://localhost:27017/test',
 {useNewUrlParser: true, useUnifiedTopology: true})
    .then((self) => { 
        console.log('YAY MongoDB is connected')
        //clear collection
        return mongoose.connection.dropDatabase()
        // or
        //self.connection.dropDatabase()
    })
    .then(() => {
        // Create
        MyModel.create([{name: 'Luis', age:18}, {name: 'Jorge', age:21}])
          .then(() => {
             console.log('Data added')
          })
          .catch (() => {
             console.log('Failed to create')
          })
    })

    .catch(() => {
        console.log('Connection failed')

    })

// Create

// Read

MyModel.find({name: 'Luis'})
    //data is an array of objects as a parameter
    .then((data) => {
        console.log('Data fetched', data)
    })
    .catch(() => {
        console.log('Failed to create')
 })

    //MyModel.findById


// Update
/*
MyModel.updateOne()
*/

// DELETE
/*
MyModel.deleteOne()
MyModel.deleteMany()
MyModel.findByIdAndDelete ('49289huashzashauisa')

*/