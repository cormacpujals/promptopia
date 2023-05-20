import { Schema, model, models } from "mongoose";

const UserSchema = newSchema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email already exists!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [] // regex here
  }
})