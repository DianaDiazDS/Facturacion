const mongoose = require("mongoose");

// Conexión remota                                                
// const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@clusterds.4onbt.mongodb.net/EmsoMogua`;
const URI = 'mongodb+srv://DS:atlasPersonalds12@clusterds.4onbt.mongodb.net/EmsoMogua';

mongoose.set("strictQuery", false);

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected with database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
