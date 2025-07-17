"use client";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-100 shadow-md p-6${
        className ? ` ${className}` : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
