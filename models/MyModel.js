const mongoose = require('mongoose')

// structure of the document 
let MySchema = new mongoose.Schema({
  name: String,
  age: Number

})

// mongoose.model (name of your collection to create, Schema)
const MyModel = mongoose.model('ironhacker', MySchema)

module.exports = MyModel
