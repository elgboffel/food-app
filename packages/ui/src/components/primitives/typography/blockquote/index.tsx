import { Blockquote as $Blockquote } from "@mantine/core";
import React, { ComponentProps, ElementRef, forwardRef } from "react";

export type BlockquoteProps = ComponentProps<typeof $Blockquote>;

export const blockquoteDefaultProps: BlockquoteProps = {};

export const Blockquote = forwardRef<
  ElementRef<typeof $Blockquote>,
  BlockquoteProps
>((props, ref) => (
  <$Blockquote {...blockquoteDefaultProps} {...props} ref={ref} />
));
