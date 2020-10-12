import mongoose, { mongo } from "mongoose";

export interface Sensor extends mongoose.Document {
    name: string;
    type: string;
    latitude: string;
    longitude: string;
    waterLevel: string;
  }

  const schema: mongoose.SchemaDefinition = {
    name: { type: mongoose.SchemaTypes.String, required: true },
    type: { type: mongoose.SchemaTypes.String, required: true },
    latitude: { type: mongoose.SchemaTypes.String, required: true },
    longitude: { type: mongoose.SchemaTypes.String, required: true },
    waterLevel: { type: mongoose.SchemaTypes.Date, required: true },
};


const collectionName: string = "water"
const waterSchema: mongoose.Schema = new mongoose.Schema(schema);

const Water = (conn: mongoose.Connection): mongoose.Model<Sensor> =>
  conn.model(collectionName, waterSchema);

export default Water;