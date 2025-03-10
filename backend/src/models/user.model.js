import mongooe from "mongoose";
const userSchema = mongooe.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    fullName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 6,
    },
    profilePic:{
        type: String,
        default: "",
    },
},
{timestamps: true,}
);

const User = mongooe.model("User", userSchema);

export default User;