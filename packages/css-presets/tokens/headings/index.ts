import { MantineTheme } from "@mantine/core/lib/core/MantineProvider/theme.types";
import { rem } from "@mantine/core";
import { PartialDeep } from "type-fest";

export const headingsValues: PartialDeep<MantineTheme["headings"]> = {
  fontWeight: "700",
  fontFamily: "Roboto, sans-serif",
  sizes: {
    h1: { fontSize: rem(36) },
    h2: { fontSize: rem(28) },
    h3: { fontSize: rem(22) },
    h4: { fontSize: rem(18) },
    h5: { fontSize: rem(16) },
    h6: { fontSize: rem(14) },
  },
};
