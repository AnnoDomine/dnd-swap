import React from "react";

import { StyledButton } from "./button.styled";

type Props = {
    children: JSX.Element | React.ReactNode;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...props }: Props) => <StyledButton {...props}>{children}</StyledButton>;

export default Button;
