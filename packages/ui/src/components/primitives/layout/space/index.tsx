import { Space as $Space } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type SpaceProps = ComponentProps<typeof $Space>;

export const spaceDefaultProps: SpaceProps = {};

export const Space = forwardRef<ElementRef<typeof $Space>, SpaceProps>(
  (props, ref) => <$Space {...spaceDefaultProps} {...props} ref={ref} />,
);
