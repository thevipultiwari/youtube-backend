import { Timestamp } from "mongodb";
import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId,   // one who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,  // one to "subscriber" whom is subscribing
        ref: "User"

    }
}, { Timestamp: true })

export const Subscription = mongoose.model("Subscription")