import { Flex as $Flex } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type FlexProps = ComponentProps<typeof $Flex>;

export const flexDefaultProps: FlexProps = {};

export const Flex = forwardRef<ElementRef<typeof $Flex>, FlexProps>(
  (props, ref) => <$Flex {...flexDefaultProps} {...props} ref={ref} />,
);
