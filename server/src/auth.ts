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

    const findEmail = await UserModel.findOne({email})

    if(!findEmail) {
        return res.json({message: "Email doesn't exist."})
    }
    //@ts-ignore
    const isMatch = await bcrypt.compare(password, findEmail.password)

    if(!isMatch) {
        return res.json({message: "Incorrect Password"})
    }

    const token = jwt.sign({
        id: findEmail._id
    }, jwtsecret)

    res.json({token})
})

export default router; 