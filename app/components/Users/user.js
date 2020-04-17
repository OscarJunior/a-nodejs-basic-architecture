const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project'
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role'
    },
    profile: {
      name: String,
      email: String,
      avatar: {
        type: Schema.Types.ObjectId,
        ref: 'AmazonFile'
      }
    },
    apikey: { type: Schema.Types.String },
    refreshToken: {
      type: Schema.Types.String
    },
    lastLogon: Schema.Types.Date
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
