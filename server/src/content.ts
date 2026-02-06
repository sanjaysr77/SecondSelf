import express from 'express';
import { userMiddleware } from './userMiddleware';
import { contentModel, tagModel } from './db';
import {z} from 'zod';

const router = express.Router();

const contentSchema = z.object({
    link: z.string().url(),
    type: z.string().min(1),
    title: z.string().min(1),
    tags: z.union([
        z.array(z.string()),
        z.string()
    ]).optional()
});

router.post("/content", userMiddleware, async (req, res) => {
    try {

        const validation = contentSchema.safeParse(req.body);

        if(!validation.success) {
            return res.status(400).json ({
                message: "Invalid request format",
                details: validation.error
            })
        }

        let {link, type, title, tags = []} = validation.data;

        if (typeof tags === "string") {
            
            tags = tags
                .replace(/[\[\]]/g, "")    // remove brackets if present
                .split(",")
                .map(t => t.trim())
                .filter(Boolean);
        }

        if (!Array.isArray(tags)) tags = [];

        const tagIds = [];
        const tagNames = [];

        for (const tagName of tags) {
            let tag = await tagModel.findOne({name: tagName})

            if (!tag) {
                tag = await tagModel.create({name: tagName})
            }

            tagIds.push(tag._id);
            tagNames.push(tag.name)
        }

        const content = await contentModel.create({
            link,
            type,
            title,
            tags: tagIds,
            tagName: tagNames,
            //@ts-ignore
            userId: req.userId
        }as any);
        res.status(201).json({message: "Content Added"})
    }
    catch(err) {
        console.error(err);
    }
})

router.get("/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await contentModel.find({
        userId: userId
    })//.populate("userId", "username password _id")
    res.json({
        content: content
    })
})

export default router;