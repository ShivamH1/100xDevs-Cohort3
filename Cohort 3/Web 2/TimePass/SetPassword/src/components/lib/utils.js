import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";
import { useAuth } from "@/services/context/AuthContext";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getSubdomain = () => {
  const host = window.location.hostname;
  const parts = host.split(".");
  if (parts.length > 2) {
    return parts[0];
  }
  return null;
};
export const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getDomainName = () => {
  const userDetails = Cookies.get("domainName");
  const { user } = useAuth();
  // if (user?.domain_id) {
  //     // const user = JSON.parse(userDetails);
  //     return user?.domain_id
  // }
  return "";
};
