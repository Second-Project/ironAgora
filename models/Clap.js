const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const clapSchema = new Schema({
  _idQuestion: { type:Schema.Types.ObjectId, ref:'Question' },
  _authorId: { type:Schema.Types.ObjectId, ref:'User' }
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Clap = mongoose.model('Clap', clapSchema);
module.exports = Clap;
