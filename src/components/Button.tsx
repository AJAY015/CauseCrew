import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button
    className={`px-6 py-2 rounded-lg bg-[#FF5722] text-white hover:bg-[#E64A19] transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
