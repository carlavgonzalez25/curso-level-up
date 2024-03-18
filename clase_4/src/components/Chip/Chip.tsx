import * as React from "react";
import { ButtonFactory } from "../Buttons/Buttons";

interface ChipProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Chip: React.FC<ChipProps> = ({ onClick, children }) => {
  return (
    <ButtonFactory type="action" onClick={onClick}>
      {children}
    </ButtonFactory>
  );
};

export default Chip;
