import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://fayolo482:hien7418523@cluster0.dlakdhj.mongodb.net/";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log(" database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
