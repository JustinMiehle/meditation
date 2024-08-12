import { type ClassValue, clsx } from "clsx";
import "reflect-metadata";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
