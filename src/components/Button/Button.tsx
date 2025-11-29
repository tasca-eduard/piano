import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

function Button({ children, onClick, disabled, className }: Props) {
  return (
    <button
      className={`btn-primary ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
