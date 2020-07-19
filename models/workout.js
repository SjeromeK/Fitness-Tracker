const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
      type: Date,
      default: () => new Date()
  },
  excercises: [
    {
        extype: {
            type: String,
            trim: true,
            required: "Enter an excercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an excercise name"      
        },
        duration: {
            type: Number,
            trim: true,
            required: "enter a duration"
        },
        weight :{
            type: Number
        },
        reps :{
            type: Number
        },
        set :{type: Number
        },
        distance :{type: Number
        }
    
    }
  ]
  
});

const Workout = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
