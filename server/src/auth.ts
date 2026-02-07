import { UserModel } from "./db";
import express, {Request, Response} from 'express';
import {z} from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = express.Router();
const jwtsecret = process.env.JWT_SECRET as string;

router.post("/signup", async (req: Request, res: Response) => {

    const requiredBody = z.object({
        email: z.string().min(3).max(50),
        username: z.string().min(3).max(25),
        password: z.string().min(3).max(25),
    })

    const parsedData = requiredBody.safeParse(req.body);
    if(!parsedData.success) {
        return res.json ({
            message: "Incorrect Format",
            error: parsedData.error
        })
    }

    const { email, password, username} = parsedData.data;

    const findUser = await UserModel.findOne({email});

    if(findUser) {
        return res.status(409).json({
            message: "User already exists"
        })
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 3);

        await UserModel.create({
            email,
            password: hashedPassword,
            username
        })
        res.json({message: "You are signed up"})
    }
    catch(err) {
        res.json({message: err})
    }
}) 

router.post("/signin", async (req: Request, res: Response) =>{

    const {email, password} = req.body;

    const user = await UserModel.findOne({email})

    if(!user) {
        return res.status(401).json({message: "Email doesn't exist."})
    }
    //@ts-ignore
    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        return res.status(401).json({message: "Incorrect Password"})
    }

    const token = jwt.sign({
        id: user._id
    }, jwtsecret)

    res.status(200).json({token})
})

export default router; 