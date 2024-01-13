import React, { ReactNode } from "react";
import { Button as $Button } from "@mantine/core";
import { ButtonVariants, button } from "./index.css";

export type ButtonProps = ButtonVariants & {
  children?: ReactNode;
};

export const Button = ({ size, color, rounded, children }: ButtonProps) => (
  <$Button type="button" className={button({ size, color, rounded })}>
    {children}
  </$Button>
);
