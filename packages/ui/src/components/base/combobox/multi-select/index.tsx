import { MultiSelect as $MultiSelect } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type MultiSelectProps = ComponentProps<typeof $MultiSelect>;

export const multiSelectDefaultProps: MultiSelectProps = {};

export const MultiSelect = forwardRef<
  ElementRef<typeof $MultiSelect>,
  MultiSelectProps
>((props, ref) => (
  <$MultiSelect {...multiSelectDefaultProps} {...props} ref={ref} />
));
