const mongoose = require('mongoose');
const connection = "mongodb+srv://team4capstone:SzTC7ah4XXRbLHjqatvgzDNTa2qVT7jHHuNmtx3rXm6SvB3h69dFAGEvwQYbAKN5@cluster0.0lpuzpd.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));