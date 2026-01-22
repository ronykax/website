import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAgeDecimal(dob: Date) {
  const now = Date.now();
  const birth = dob.getTime();

  const years = (now - birth) / (1000 * 60 * 60 * 24 * 365.2422);
  const decimal = years % 1;

  return decimal.toFixed(10).slice(1);
}
