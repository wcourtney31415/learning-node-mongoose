const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hostname = 'localhost';
const port = '27017';
const dbName = 'MyDb';

const connectionString = `mongodb://${hostname}:${port}/${dbName}`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const UserSchema = new Schema({
  firstName: String,
  lastName: String
});

const User = mongoose.model('User', UserSchema);

const query = {
  'lastName': 'Green'
};

const fields = 'firstName lastName';

User.find(query, fields, function(err, users) {
  if (err) return handleError(err);
  console.log(users);
})