import { SimpleGrid as $SimpleGrid } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type SimpleGridProps = ComponentProps<typeof $SimpleGrid>;

export const simpleGridDefaultProps: SimpleGridProps = {};

export const SimpleGrid = forwardRef<
  ElementRef<typeof $SimpleGrid>,
  SimpleGridProps
>((props, ref) => (
  <$SimpleGrid {...simpleGridDefaultProps} {...props} ref={ref} />
));
