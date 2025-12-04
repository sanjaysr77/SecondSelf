import dotenv from 'dotenv'
dotenv.config()

import mongoose, {Schema, model} from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

async function main () {
    try {
        const MONGO_URL = process.env.MONGO_URL;
        if (!MONGO_URL) {
            throw new Error ("MONGO URL is not present in the .env file");
        }
       await mongoose.connect(MONGO_URL)
       console.log("MongoDB is connected Successfully!")
    }
    catch (err) {
        console.error("MongoDB Connection Error", err);
        process.exit(1);
    }
}

main ();

const UserSchema = new Schema ({
    username: String,
    password: String,
    email: {type: String, unique: true }
})

export const UserModel = model("User", UserSchema);

const contentSchema = new Schema ({
    title: String,
    link: String, 
    type: String,
    tags: [{type: ObjectId, ref: 'Tag'}],
    tagName: [String],
    userId: {type: ObjectId, ref:'User', required: true}
})

export const contentModel = model ("Content", contentSchema);

const tagSchema = new Schema ({
    name: String
})

export const tagModel = model("Tag", tagSchema);