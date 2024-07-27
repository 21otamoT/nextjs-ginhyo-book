import "styled-components";
import { theme } from "@/themes"; // themeのパスを正しく指定

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

/**
 * TはCSSプロパティの値の型
 */
export type ResponsiveProp<T> = {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};

export type Responsive<T> = T | ResponsiveProp<T>;

//Flex
type SelfPosition =
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "self-end"
  | "self-start"
  | "start";

type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";

type ContentDistribution =
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "stretch";

type CSSPropertyGlobals =
  | "-moz-initial"
  | "inherit"
  | "initial"
  | "revert"
  | "unset";

export type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | "baseline"
  | "normal"
  | "stretch"
  | (string & {});

export type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "start"
  | "baseline"
  | "normal"
  | (string & {});

export type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | "baseline"
  | "left"
  | "legacy"
  | "normal"
  | "right"
  | "stretch"
  | (string & {});

export type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentPosition
  | "left"
  | "normal"
  | "right"
  | (string & {});

export type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | "nowrap"
  | "wrap"
  | "wrap-reverse";

export type CSSPropertyFlexDirection =
  | CSSPropertyGlobals
  | "column"
  | "column-reverse"
  | "row"
  | "row-reverse";

export type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | "auto"
  | "baseline"
  | "normal"
  | "stratch"
  | (string & {});

//Grid
type GridLine = "auto" | (string & {});

export type CSSPropertyGridColumn =
  | CSSPropertyGlobals
  | GridLine
  | (string & {});

export type CSSPropertyGridRow = CSSPropertyGlobals | GridLine | (string & {});

export type CSSPropertyGridAutoFlow =
  | CSSPropertyGlobals
  | "column"
  | "dense"
  | "row"
  | (string & {});

export type CSSPropertyGridAria = CSSPropertyGlobals | GridLine | (string & {});
