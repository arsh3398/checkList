const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isChecked: {
      type: Boolean,
    },
    isCheckedQc: {
      type: Boolean,
    },
    criticality:{
      type: Number
    }
  });
  
  const checkListSchema = new mongoose.Schema({
    wireCenter: {
      type: String,
      required: true
    },
    jobNumber: {
      type: String,
      required: true
    },
    designerName: {
      type: String,
      required: true
    },
    qcName: {
      type: String,
      required: true
    },
    items: [itemSchema]
  });

module.exports = mongoose.model('checkList', checkListSchema, 'QcCheckList');