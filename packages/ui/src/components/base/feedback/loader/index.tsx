import { Loader as $Loader } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type LoaderProps = ComponentProps<typeof $Loader>;

export const LoaderDefaultProps: LoaderProps = {};

export const Loader = forwardRef<ElementRef<typeof $Loader>, LoaderProps>(
  (props, ref) => <$Loader {...LoaderDefaultProps} {...props} ref={ref} />,
);
