interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export function Button({ variant = "primary", ...props }: Props) {
  return (
    <button
      {...props}
      className={`btn btn-${variant}`}
    />
  );
}
