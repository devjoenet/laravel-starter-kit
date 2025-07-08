import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function generateId(prefix: string | null = null): string {
  prefix = prefix === null ? "id" : prefix;
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}
