import mongoose from "mongoose";

const uri: string = process.env.DB_PATH;

let dbConnection: mongoose.Connection = null;

export async function getDBConnection(): Promise<mongoose.Connection> {
    if (dbConnection = null) {
        dbConnection = await mongoose.createConnection(uri, {
            bufferCommands: false, 
            bufferMaxEntries: 0,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
    }
    return dbConnection;
};

