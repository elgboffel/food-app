import { Code as $Code } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type CodeProps = ComponentProps<typeof $Code>;

export const codeDefaultProps: CodeProps = {};

export const Code = forwardRef<ElementRef<typeof $Code>, CodeProps>(
  (props, ref) => <$Code {...codeDefaultProps} {...props} ref={ref} />,
);
