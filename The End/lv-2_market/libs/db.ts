import { connect } from 'mongoose';
const ConnectDb = async () => {
    try {
      await connect(process.env.MONGODB_URI as string);
      console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
}

export default ConnectDb;