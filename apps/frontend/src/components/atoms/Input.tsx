import { type ForwardedRef, forwardRef } from "react";

export const Input = forwardRef(
  (props: React.InputHTMLAttributes<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) => {
    return <input ref={ref} className="input" {...props} />;
  }
);
