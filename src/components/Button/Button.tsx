import React, { FC } from "react";
import { ButtonContainer } from "./ButtonCss";

interface IButton {
  color?: string;
  text?: React.ReactNode;
  onClick: () => void;
  radius?: string;
  width?: string;
  height?: string;
}
const Button: FC<IButton> = ({
  color = "gray",
  text,
  onClick,
  radius,
  width,
}) => {
  return (
    <ButtonContainer>
      <button
        className="t-button"
        onClick={onClick}
        style={{
          backgroundColor: color,
          borderRadius: radius,
          width: width,
        }}
      >
        {text}
      </button>
    </ButtonContainer>
  );
};

export default Button;
