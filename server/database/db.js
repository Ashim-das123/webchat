import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();// for intialize dotenv;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

mongoose.set('strictQuery', true);
const Connection = async () => {
    // const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.zqpmmaj.mongodb.net/?retryWrites=true&w=majority`;
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@update-wp.bzwxozp.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true })
        console.log('DataBase connected successfully');
    }
    catch (error) {

        console.log('Error while connecting with the database', error.message);
    }
}
export default Connection;