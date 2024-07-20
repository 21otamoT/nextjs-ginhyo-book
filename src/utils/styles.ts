import type { ResponsiveProp, Responsive } from "../types";
import { theme } from "@/themes/themes";

//Themeの型
export type AppTheme = typeof theme;

type SpaceThemeKeys = keyof typeof theme.space;
type ColorThemeKeys = keyof typeof theme.colors;
type FontSizesThemeKeys = keyof typeof theme.fontSizes;
type LetterSpacingsThemeKeys = keyof typeof theme.space;
type lineHeightsThemeKeys = keyof typeof theme.space;

export type Space = SpaceThemeKeys | (string & {});
export type Color = ColorThemeKeys | (string & {});
export type FontSize = FontSizesThemeKeys | (string & {});
export type LetterSpacing = LetterSpacingsThemeKeys | (string & {});
export type lineHeight = lineHeightsThemeKeys | (string & {});

//ブレークポイント
const BREAKPOINTS: Record<string, string> = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const SPACE_KEYS = new Set([
  "margin",
  "margin-top",
  "margin-left",
  "margin-bottom",
  "margin-right",
  "padding",
  "padding-top",
  "padding-left",
  "padding-bottom",
  "padding-right",
]);

const COLOR_KEYS = new Set(["color", "background-color"]);
const FONT_SIZE_KEYS = new Set(["font-size"]);
const LINE_SPACING_KEYS = new Set(["letter-spacing"]);
const LINE_HEIGHT_KEYS = new Set(["line-height"]);

const isResponsivePropType = <T>(prop: any): prop is ResponsiveProp<T> => {
  return (
    prop &&
    (prop.base !== undefined ||
      prop.sm !== undefined ||
      prop.md !== undefined ||
      prop.lg !== undefined ||
      prop.xl !== undefined)
  );
};

const isSpaceThemeKeys = (
  prop: any,
  theme: AppTheme
): prop is SpaceThemeKeys => {
  return Object.keys(theme.space).filter((key) => key == prop).length > 0;
};

const isColorThemeKeys = (
  prop: any,
  theme: AppTheme
): prop is ColorThemeKeys => {
  return Object.keys(theme.colors).filter((key) => key == prop).length > 0;
};

const isFontSizeThemeKeys = (
  prop: any,
  theme: AppTheme
): prop is FontSizesThemeKeys => {
  return Object.keys(theme.fontSizes).filter((key) => key == prop).length > 0;
};

const isLetterSpacingThemeKeys = (
  prop: any,
  theme: AppTheme
): prop is LetterSpacingsThemeKeys => {
  return (
    Object.keys(theme.letterSpacings).filter((key) => key == prop).length > 0
  );
};

const isLineHeightThemeKeys = (
  prop: any,
  theme: AppTheme
): prop is lineHeightsThemeKeys => {
  return Object.keys(theme.lineHeights).filter((key) => key == prop).length > 0;
};

const toThemeValueIfNeeded = <T>(
  propKey: string,
  value: T,
  theme?: AppTheme
) => {
  if (
    theme &&
    theme.space &&
    SPACE_KEYS.has(propKey) &&
    isSpaceThemeKeys(value, theme)
  ) {
    return theme.space[value];
  }
};

export const toPropValue = <T>(
  propKey: string,
  prop?: Responsive<T>,
  theme?: AppTheme
) => {
  if (prop === undefined) return undefined;

  if (isResponsivePropType(prop)) {
    const result = [];
    for (const responsiveKey in prop) {
      if (responsiveKey === "base") {
        //デフォルトのスタイル
        result.push(
          `${propKey}: ${toThemeValueIfNeeded(
            propKey,
            prop[responsiveKey],
            theme
          )}`
        );
      } else if (
        responsiveKey === "sm" ||
        responsiveKey === "md" ||
        responsiveKey === "lg" ||
        responsiveKey === "xl"
      ) {
        //メディアクエリでのスタイル
        const breakpoint = BREAKPOINTS[responsiveKey];
        const style = `${propKey}: ${toThemeValueIfNeeded(
          propKey,
          prop[responsiveKey],
          theme
        )}`;
        result.push(`@media screen and (min-width: ${breakpoint}) {${style}}`);
      }
    }
    return result.join("\n");
  }
  return `${propKey}: ${toThemeValueIfNeeded(propKey, prop, theme)}`;
};
