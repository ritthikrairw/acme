"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
