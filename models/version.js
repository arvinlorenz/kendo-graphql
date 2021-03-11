const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const versionItemSchema = new Schema({ text: String, data: String });
const versionSchema = new Schema({
  text: {
    type: String,
    required: true,

  },
  data: {
    type: String,
  },
  items: {
    type: [versionItemSchema],
    default: []
  }
}, { timestamps: true })


module.exports = mongoose.model('Version', versionSchema);
