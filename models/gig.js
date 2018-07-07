const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GigSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User'},
  title: String,
  category: String,
  about: String,
  price: Number,
  picture: { type: String, default: 'https://s3.yimg.com/lo/api/res/1.2/DPh6x6Z1deXfmac7af4B8A--/YXBwaWQ9eW15O3c9NjQwO3E9NzU7c209MQ--/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/1ea8487edbd0713c30e43e0d9ffc861c'},
  created: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Gig', GigSchema);
