import { Group as $Group } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type GroupProps = ComponentProps<typeof $Group>;

export const groupDefaultProps: GroupProps = {};

export const Group = forwardRef<ElementRef<typeof $Group>, GroupProps>(
  (props, ref) => <$Group {...groupDefaultProps} {...props} ref={ref} />,
);
