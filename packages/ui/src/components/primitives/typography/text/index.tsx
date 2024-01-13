import { Text as $Text, TextProps as $TextProps } from "@mantine/core";
import React, { ElementRef, forwardRef, ReactNode } from "react";

export type TextProps = $TextProps & {
  children?: ReactNode;
};

export const textDefaultProps: TextProps = {};

export const Text = forwardRef<ElementRef<typeof $Text>, TextProps>(
  (props, ref) => <$Text {...textDefaultProps} {...props} ref={ref} />,
);
