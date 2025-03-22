"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
     style={{
       padding: "10px 10px",
       borderRadius: "5px",
       cursor: "pointer",
     }}
    >
      {children}
    </button>
  );
};
