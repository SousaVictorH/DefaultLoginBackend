const mongoose = require('mongoose');

const { mongoConfig } = require('../../../../resourses');
const { url, options } = mongoConfig;

mongoose.set('useCreateIndex', true);
mongoose.connect(url,options);

let mongoDB = undefined;

try {

    mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console, 'connection error:'));
    mongoDB.once('open', function () {
        console.log('MongoDB Connected!');
    });
    
} catch (error) {
    throw error;
}

module.exports = mongoDB;