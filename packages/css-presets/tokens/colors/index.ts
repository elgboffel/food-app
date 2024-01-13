import { MantineColorsTuple, DefaultMantineColor } from "@mantine/core";

export enum ExtendColors {
  DeepGreen = "deepGreen",
}

export const colorsValues: Record<string, MantineColorsTuple> = {
  [ExtendColors.DeepGreen]: [
    "#0A2F51",
    "#0E4D64",
    "#137177",
    "#188977",
    "#1D9A6C",
    "#39A96B",
    "#56B870",
    "#74C67A",
    "#99D492",
    "#BFE1B0",
    "#DEEDCF",
  ],
};

type ExtendedCustomColors = ExtendColors.DeepGreen | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}
