const password = process.env.MONGODB_PASSWORD;
const dbname = process.env.MONGODB_DBNAME;
const uri = process.env.MONGODB_URL;

const url = uri.replace('<password>', password).replace('<dbname>', dbname);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = { url, options };