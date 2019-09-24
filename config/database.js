var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blogApi2', { useNewUrlParser: true,  useUnifiedTopology: true  });

var db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB`);
});