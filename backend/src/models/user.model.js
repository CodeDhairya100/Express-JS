import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,  // dha_irya -> dhairya
            minLength:1,
            maxLength: 30,
        },

        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 50, 
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,  // dha_irya -> dhairya
        }
    },
    
    {
        timestamps: true
    },
)

// before saving any password we need to hash it
userSchema.pre("save", async function (next){
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)

    next();
}) 

// compare passwords
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.passwwrd)
}

export const User = mongoose.model("User", userSchema)