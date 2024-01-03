import mongoose from 'mongoose';

const connectDatabase = () => {
    console.log("connecting to the database...")

    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB Atlas connected.")).catch((error) => console.log(error))
}

export default connectDatabase;