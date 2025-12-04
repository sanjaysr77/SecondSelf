import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken'
const jwtsecret = process.env.JWT_SECRET as string;

export function userMiddleware (req: Request, res: Response, next: NextFunction) {

    const token = req.headers.token;
    console.log(token);
    const decoded = jwt.verify(token as string, jwtsecret);
    console.log(decoded);

    if(decoded) {
        if (typeof decoded === 'string'){
            res.status(403).json({
                message: "You are not logged in"
            })
            return;
        }
        //@ts-ignore
        req.userId = (decoded as JwtPayload).id;
        next();
    } else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }
}