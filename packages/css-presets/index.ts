"use client";

import {
  createTheme,
  DEFAULT_THEME,
  MantineThemeOverride,
  mergeMantineTheme,
} from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";
import { breakpointsValues } from "./tokens/breakpoints";
import { colorsValues, ExtendColors } from "./tokens/colors";
import { headingsValues } from "./tokens/headings";
import { shadowsValues } from "./tokens/shadows";
import { fontSizesValues } from "./tokens/font-sizes";
import { fontFamilyValues } from "./tokens/font-family";

export const themeOverride: MantineThemeOverride = createTheme({
  primaryColor: ExtendColors.DeepGreen,
  breakpoints: {
    ...breakpointsValues,
  },
  colors: {
    ...colorsValues,
  },
  shadows: {
    ...shadowsValues,
  },

  headings: {
    ...headingsValues,
  },
  fontSizes: {
    ...fontSizesValues,
  },
  fontFamily: fontFamilyValues,
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const vars = themeToVars(theme);
