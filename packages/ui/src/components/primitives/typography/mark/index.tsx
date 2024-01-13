import { Mark as $Mark } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type MarkProps = ComponentProps<typeof $Mark>;

export const MarkDefaultProps: MarkProps = {};

export const Mark = forwardRef<ElementRef<typeof $Mark>, MarkProps>(
  (props, ref) => <$Mark {...MarkDefaultProps} {...props} ref={ref} />,
);
