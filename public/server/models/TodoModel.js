
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const myURI = 'mongodb://<dbuser>:<dbpassword>@ds033107.mlab.com:33107/december';
mongoose.connect(myURI);

const URI =process.env.MONGO_URI || myURI

module.exports = mongoose.model('Task', Task);

