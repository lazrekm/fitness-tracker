const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create new workout schema 
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
        type: {
            type: String,
            trim: true,
            required: "Enter exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter exercise name"
        },
        duration: { 
            type: Number,
            default: 0,
            required: "Enter exercise duration"
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number
        }
    }
]
});

const Workout = mongoose.model("Workout", workoutSchema);

// export workout model
module.exports = Workout;
