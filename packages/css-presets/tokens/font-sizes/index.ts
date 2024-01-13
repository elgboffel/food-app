import { PartialDeep } from "type-fest";
import { MantineTheme } from "@mantine/core/lib/core/MantineProvider/theme.types";
import { rem } from "@mantine/core";

export const fontSizesValues: PartialDeep<MantineTheme["fontSizes"]> = {
  xs: rem(12),
  sm: rem(14),
  md: rem(16),
  lg: rem(18),
  xl: rem(20),
  "2xl": rem(22),
  "3xl": rem(24),
};
