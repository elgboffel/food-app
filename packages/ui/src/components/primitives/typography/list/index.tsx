import { List as $List } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type ListProps = ComponentProps<typeof $List>;

export const ListDefaultProps: ListProps = {};

export const List = forwardRef<ElementRef<typeof $List>, ListProps>(
  (props, ref) => <$List {...ListDefaultProps} {...props} ref={ref} />,
);
