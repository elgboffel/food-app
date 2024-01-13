import { Center as $Center, CenterProps as $CenterProps } from "@mantine/core";
import React, { ElementRef, forwardRef } from "react";

export type CenterProps = $CenterProps;

export const centerDefaultProps: CenterProps = {};

export const Center = forwardRef<ElementRef<typeof $Center>, CenterProps>(
  ({ ...props }, ref) => (
    <$Center {...centerDefaultProps} {...props} ref={ref} />
  ),
);
