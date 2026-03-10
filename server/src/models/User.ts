
import mongoose, { model, Schema } from "mongoose";

interface IUser {
    name: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    boodksAdded?: string[]
    role: string
}

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    boodksAdded: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }],
    role: {
        type: String,
        enum: ['creator', 'visitor', 'admin']
    }
})

const User = model<IUser>('User', UserSchema)

export { User, IUser }