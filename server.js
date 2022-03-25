const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path: './config.env'});
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// Connect with the database.
mongoose.connect(DB, {
    useNewUrlParser: true,
})
.then(() => console.log('DB IS CONNECTED'));

// Starting server on port 8000.
var port = process.env.PORT;
app.listen(port, () =>{
    console.log('Listening on port ' + port + ' ...');
})