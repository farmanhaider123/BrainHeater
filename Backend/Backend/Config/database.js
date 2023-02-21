const mongoose = require("mongoose");
const { connect, Mongoose, set } =mongoose;
require('dotenv').config();
const DataBaseUrl = process.env.DBURL
module.exports = class MongoDataSource {
    mongoConnection;
  
    async connect() {
     
      const mongoUrl = `${DataBaseUrl}`;
      if (!this.isConnected()) {
        connect(mongoUrl, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
          socketTimeoutMS: process.env.SOCKETTIMEOUTMS,
          connectTimeoutMS:  process.env.CONNECTTIMEOUTMS,
        })
          .then((connection) => {
            console.log("Successfully Connected");
            this.setConnection(connection);
          })
          .catch((err) => {
            console.warn(`mongo connection error`, err);
          });
      } else {
        console.info(`Database Already Connected`);
      }
    }

    isConnected() {
      if (this.mongoConnection && this.mongoConnection.connection) {
        const { readyState } = this.mongoConnection.connection;
        console.info(`MongoDB ready state = ${readyState}`);
        return readyState === 1;
      }
      return false;
    }

    setConnection(connection) {
      this.mongoConnection = connection;
      this.mongoConnection.set("debug", true);
      this.mongoConnection.connection.on("disconnected", (error) => {
        console.error("database connection closed", error);
      });
    }
  
}
