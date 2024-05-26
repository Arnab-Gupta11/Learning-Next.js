const { default: mongoose } = require("mongoose");

const connectToDb = async () => {
  mongoDb_URI = `mongodb+srv://userManage:vuzlcElueGYHg6cC@cluster0.o5kcl0y.mongodb.net/userManagementDB`;
  try {
    const connection = await mongoose.connect(mongoDb_URI);
    console.log(connection);
  } catch (error) {
    console.log("Mongodb connection Failed");
  }
};
export default connectToDb;
