interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`w-full py-3 rounded-xl font-semibold bg-green-600 text-white hover:bg-green-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
