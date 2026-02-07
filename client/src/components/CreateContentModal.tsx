import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./Button";

export const ContentType = {
    Youtube: "youtube",
    Twitter: "twitter",
} as const;

export type ContentType = typeof ContentType[keyof typeof ContentType];


interface CreateContentModalProps {
    open: boolean,
    onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const tagRef = useRef<HTMLInputElement>(null);

    const [type, setType] = useState<ContentType>(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const tagsRaw = tagRef.current?.value || ''
        const tags = tagsRaw.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
        
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please login to add content");
            return;
        }

        try {
            await axios.post(`${BACKEND_URL}/v1/content`, {
                title,
                link,
                type,
                tags
            }, {
                headers: {
                    "token": token
                }
            })

            onClose();
        } catch (error) {
            console.error("Error adding content:", error);
            alert("Failed to add content. Please try again.");
        }
    }

    return (
        <div>
            {open && (
                <div>
                    <div className="w-screen h-screen bg-red-500 fixed top-0 left-0 opacity-60 flex justify-center">
                    </div>
                    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
                        <span className="bg-white opacity-100 p-4 rounded-lg shadow-lg">
                            <div className="flex justify-end">
                                <div onClick={onClose} className="cursor-pointer">
                                    <CrossIcon />
                                </div>
                            </div>
                            <div>
                                <Input reference={titleRef} placeholder="Title" />
                                <Input reference={linkRef} placeholder="Link" />
                                <Input reference={tagRef} placeholder="Tags" />
                            </div>
                            <div className="flex gap-1 justify-center pb-2">
                                <Button text="Youtube" variant={type === ContentType.Youtube ?"primary": "secondary"} onClick={() => setType(ContentType.Youtube)} />

                                <Button text="Twitter" variant={type === ContentType.Twitter ?"primary": "secondary"} onClick={() => setType(ContentType.Twitter)} />
                            </div>
                            <div className="flex justify-center">
                                <Button text="Submit" variant="primary" onClick = {addContent} />
                            </div>
                        </span>
                    </div>
                </div>

            )}
        </div>
    );
}

