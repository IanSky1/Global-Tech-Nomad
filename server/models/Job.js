const mongoose = require("mongoose");

const { Schema } = mongoose;

const jobSchema = new Schema(
    {
       title: {
           type: String,
           required: true
       },
       description:{
           type: String,
           required: true,
           min:[5,'Add more to your description']
       },
       salary: {
           type: Number,
           required: true,
           min:[30000, 'Salary is too small to add']
       }
    }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
