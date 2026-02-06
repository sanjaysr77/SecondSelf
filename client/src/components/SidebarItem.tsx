import type { ReactElement } from "react";

interface SidebarItem {
    text: string,
    icon: ReactElement
}

export function SidebarItem({ text, icon }: SidebarItem) {
    return (
        <div className="flex p-2 border max-w-48 rounded gap cursor-pointer">
            <div className="pr-2">
                {icon}
            </div>
            {text}
        </div>
    )
}