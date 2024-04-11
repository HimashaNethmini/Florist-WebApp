import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";


export const register = async (req, res) => {
    //these should be in the request body when registering a user
    const { username, email, password } = req.body;

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)


    //create new user & save to db
    const newUser = await Prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        },
    });
}

export const login = (req, res) => {
    //db operations
}

export const logout = (req, res) => {
    //db operations
}