import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import regex from "./regex";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function capitalizeName(name: string) {
    return name.toLowerCase().replace(regex.capitalizeName, (match) => match.toUpperCase());
}
