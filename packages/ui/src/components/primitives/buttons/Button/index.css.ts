import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "css-presets";

export type ButtonVariants = RecipeVariants<typeof button>;
export const button = recipe({
  base: {
    borderRadius: 6,
  },

  variants: {
    color: {
      neutral: { background: "whitesmoke" },
      primary: { background: vars.colors.deepGreen[6] },
      accent: { background: "slateblue" },
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 },
    },
    rounded: {
      true: { borderRadius: 999 },
    },
  },

  compoundVariants: [
    {
      variants: {
        color: "neutral",
        size: "large",
      },
      style: {
        background: "ghostwhite",
      },
    },
  ],

  defaultVariants: {
    color: "accent",
    size: "medium",
  },
});
