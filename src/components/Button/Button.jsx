import "./Button.scss";

// btn--big-primary
// btn--big-secondary
// btn--big-text
// btn--primary
// btn--secondary
// btn--text

export const Button = ({
  type = "button",
  variant = "primary",
  size = "default",
  style = {},
  disabled = false,
  onClick = () => {},
  children,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={`btn${
        size !== "default" ? ` btn--${size}` : ""
      } btn--${variant}`}
    >
      {children}
    </button>
  );
};
