
import clsx from "clsx"
import type { ReactElement } from "react"

interface ButtonProps {
    variant: "primary" | "secondary",
    text: string,
    startIcon?: ReactElement,
    onClick: () => void;
}

const variantClasses = {
    primary: "bg-purple-700 text-white",
    secondary: "bg-purple-300 text-purple-600"
};

const baseClasses = "px-4 py-2 rounded-md font-light flex items-center cursor-pointer";

export function Button({ variant, text, startIcon, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className={clsx(baseClasses, variantClasses[variant] )}>
            {startIcon && <span className="mr-2">{startIcon}</span>}
            <span>{text}</span>
        </button>
    )
}