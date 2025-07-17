"use client";

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className="x">{children}</div>;
}

export default Card;
