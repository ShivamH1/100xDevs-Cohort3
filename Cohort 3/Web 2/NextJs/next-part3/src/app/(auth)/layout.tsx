import { ReactNode } from "react";

export default function ({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Header</h1>
      </header>
      {children}
      <footer className="bg-gray-200 p-4 text-center text-gray-600">
        <p>Footer</p>
      </footer>
    </div>
  );
}
