import { Container as $Container } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type ContainerProps = ComponentProps<typeof $Container>;

export const containerDefaultProps: ContainerProps = {};

export const Container = forwardRef<
  ElementRef<typeof $Container>,
  ContainerProps
>((props, ref) => (
  <$Container {...containerDefaultProps} {...props} ref={ref} />
));
