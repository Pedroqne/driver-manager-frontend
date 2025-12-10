interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3 border border-gray-300 rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-green-500
                  transition ${className}`}
    />
  );
}
