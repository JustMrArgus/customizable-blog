require("dotenv").config();

const app = require("./app.js");
const connectDB = require("./db/connectDB.js");

const port = process.env.PORT || 3000;

connectDB(process.env.DB_URL).then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
});
