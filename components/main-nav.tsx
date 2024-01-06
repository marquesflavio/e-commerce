"use client";

import { cn } from "@/lib/utils";

export const MainNav = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {
    return (
        <nav 
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        >
            Main Navigation
        </nav>
    );
};