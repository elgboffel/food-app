import { Stack as $Stack } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type StackProps = ComponentProps<typeof $Stack>;

export const stackDefaultProps: StackProps = {};

export const Stack = forwardRef<ElementRef<typeof $Stack>, StackProps>(
  (props, ref) => <$Stack {...stackDefaultProps} {...props} ref={ref} />,
);
