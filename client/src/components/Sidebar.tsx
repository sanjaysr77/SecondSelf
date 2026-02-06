import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar () {
    return (
        <div className="h-screen w-72 border-r mt-4 border-t rounded-r-2xl bg-white fixed left-0 top-0">
            <div className="flex items-center m-4">
                <div className="mr-2">
                    <Logo />
                </div>
                Second Self
            </div>
            <div className="m-4 space-y-4">
                <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
                <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            </div>
        </div>
    )
}