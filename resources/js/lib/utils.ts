import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function inputId(): string {
  return `input-${Math.random().toString(36).substring(2, 9)}`;
}
