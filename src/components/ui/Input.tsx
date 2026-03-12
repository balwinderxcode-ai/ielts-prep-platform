import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>}
        <input
          className={`flex w-full rounded-lg border bg-white px-4 py-3 text-base font-medium transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500 ${
            error ? "border-red-500 focus:ring-red-500" : "border-slate-300"
          } ${className}`}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
