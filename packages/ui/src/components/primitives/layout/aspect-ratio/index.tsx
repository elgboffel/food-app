import { AspectRatio as $AspectRatio } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type AspectRatioProps = ComponentProps<typeof $AspectRatio>;

export const aspectRatioDefaultProps: AspectRatioProps = {};

export const AspectRatio = forwardRef<
  ElementRef<typeof $AspectRatio>,
  AspectRatioProps
>((props, ref) => (
  <$AspectRatio {...aspectRatioDefaultProps} {...props} ref={ref} />
));
