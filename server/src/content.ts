import express from 'express';
import { userMiddleware } from './userMiddleware';
import { contentModel, tagModel } from './db';


const router = express.Router();

router.post("/content", userMiddleware, async (req, res) => {
    try {
        const {link, type, title, tags = []} = req.body;

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

export default router;