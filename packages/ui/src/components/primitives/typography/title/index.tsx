import { Title as $Title } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type TitleProps = ComponentProps<typeof $Title>;

export const TitleDefaultProps: TitleProps = {};

export const Title = forwardRef<ElementRef<typeof $Title>, TitleProps>(
  (props, ref) => <$Title {...TitleDefaultProps} {...props} ref={ref} />,
);
