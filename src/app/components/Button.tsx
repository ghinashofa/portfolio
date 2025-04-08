import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "px-6 py-2 rounded-full bg-gradient-to-r from-[#B16CEA] via-[#F5607A] to-[#FFA74B] text-white transition-all duration-300 hover:bg-[#E1E1E1] hover:text-black hover:shadow-lg hover:bg-none",
                light:
                    "px-6 py-4 rounded-full bg-gradient-to-r from-[#B16CEA] via-[#F5607A] to-[#FFA74B] text-white transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:bg-none",
                outline:
                    "rounded-full border border-black text-black hover:bg-gradient-to-r from-[#B16CEA] via-[#F5607A] to-[#FFA74B] hover:text-white hover:border-none hover:shadow-lg",
                ghost: "text-black hover:bg-gray-100",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-8 px-3 text-sm",
                lg: "h-12 px-6 text-base",
                responsive: "h-10 text-sm py-2 md:h-10 md:px-6",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
    className,
    variant,
    size,
    children,
    ...props
}) => {
    return (
        <button
            className={clsx(buttonVariants({ variant, size }), className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
