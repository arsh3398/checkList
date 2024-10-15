const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const pointsSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    critical:{
        type: String,
        required:true
    },
    isChecked: {
      type: Boolean,
    },
    isCheckedQc: {
      type: Boolean,
    }
  });

  module.exports = mongoose.model('points', pointsSchema, 'Designpoints');