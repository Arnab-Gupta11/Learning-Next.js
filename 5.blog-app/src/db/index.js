import mongoose from "mongoose";

const connectToDB = async () => {
  const mongoDB_URI = `mongodb+srv://blogApp:p7Kvi1fdieVbGVIS@cluster0.o5kcl0y.mongodb.net/blogApp`;
  mongoose
    .connect(mongoDB_URI)
    .then(() => console.log("blog database connection is successfull"))
    .catch((error) => console.log(error));
};
export default connectToDB;
