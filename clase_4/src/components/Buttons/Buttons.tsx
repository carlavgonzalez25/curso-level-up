import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

type Button = React.FC<ButtonProps>;
type ButtonType = "action" | "basic";
const BasicButton: Button = ({ onClick, children, ...rest }) => (
  <button onClick={onClick} {...rest}>
    {children}
  </button>
);

const ActionButton: Button = ({ onClick, children, ...rest }) => (
  <button
    onClick={onClick}
    {...rest}
    style={{
      background: "black",
      color: "gray",
      border: "1px solid darkgray",
    }}
  >
    {children}
  </button>
);

// 1. Creamos map con los types
// 2. Se crea el objeto
/*
const renderButton: ButtonType = ({ type='basic', children, ...props }) => {
  const buttonMap = {
    action: <ActionButton {...props}>{children}</ActionButton>,
    basic: <BasicButton {...props}>{children}</BasicButton>,
  };

  return buttonMap[type]
};
 */

// ¿Cómo reemplazamos el switch por object literal?
export const ButtonFactory = ({
  type,
  children,
  ...props
}: {
  type: ButtonType;
  children: React.ReactNode;
}) => {
  // Object Notation
  switch (type) {
    case "basic":
      return <BasicButton {...props}>{children}</BasicButton>;
    case "action":
      return <ActionButton {...props}>{children}</ActionButton>;
    default:
      return <BasicButton {...props}>{children}</BasicButton>;
  }
};
