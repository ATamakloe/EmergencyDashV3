import mongoose from "mongoose";
import { ApolloError } from "apollo-server-micro";
import SensorModel, { Sensor } from "../../database/models/sensor";

export default {
    Query: {
        getAllSensors: async (
            _, 
            __, 
            { dbConnection }: { dbConnection: mongoose.Connection }
        ): Promise<Sensor[]> => {
            const Sensor: mongoose.Model<Sensor> = SensorModel(dbConnection);
            let sensorList: Sensor[];
            try {
                sensorList = await Sensor.find().exec();
            } catch (error) {
                console.error("Error retrieving all sensors: Query: getAllSensors", error);
                throw new ApolloError("Error retrieving all sensors");
            }
            return sensorList;
        },

        getSensor: async (
            _, 
            { _id }: { _id: Sensor["_id"] },
            { dbConnection }: { dbConnection: mongoose.Connection }
        ): Promise<Sensor> => {
            const Sensor: mongoose.Model<Sensor> = SensorModel(dbConnection);
            try {
                const sensor = await Sensor.findById(_id).exec();
                return sensor;
            } catch (error) {
                console.error("Error retrieving this sensor", error);
                throw new ApolloError("Error retrieving sensor");
            }
        }
    },
};