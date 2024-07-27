import styled from "styled-components";
import Box, { BoxProps } from "../Box";
import {
  CSSPropertyAlignContent,
  CSSPropertyAlignItems,
  CSSPropertyAlignSelf,
  CSSPropertyFlexDirection,
  CSSPropertyFlexWrap,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  Responsive,
} from "@/types/styles";
import { toPropValue } from "@/utils/styles";

type FlexProps = BoxProps & {
  alignItems?: Responsive<CSSPropertyAlignItems>;
  alignContent?: Responsive<CSSPropertyAlignContent>;
  justifyContent?: Responsive<CSSPropertyJustifyContent>;
  justifyItems?: Responsive<CSSPropertyJustifyItems>;
  flexWrap?: Responsive<CSSPropertyFlexWrap>;
  flexBasis?: Responsive<string>;
  flexDirection?: Responsive<CSSPropertyFlexDirection>;
  flexGrow?: Responsive<string>;
  flexShrink?: Responsive<string>;
  alignSelf?: Responsive<CSSPropertyAlignSelf>;
  order?: Responsive<string>;
};

const Flex = styled(Box)<FlexProps>`
  ${(prop) => toPropValue("align-items", prop.alignItems, prop.theme)}
  ${(prop) => toPropValue("align-content", prop.alignContent, prop.theme)}
  ${(prop) => toPropValue("justify-content", prop.justifyContent, prop.theme)}
  ${(prop) => toPropValue("justify-items", prop.justifyItems, prop.theme)}
  ${(prop) => toPropValue("flex-wrap", prop.flexWrap, prop.theme)}
  ${(prop) => toPropValue("flex-basis", prop.flexBasis, prop.theme)}
  ${(prop) => toPropValue("flex-direction", prop.flexDirection, prop.theme)}
  ${(prop) => toPropValue("flex-grow", prop.flexGrow, prop.theme)}
  ${(prop) => toPropValue("flex-shrink", prop.flexShrink, prop.theme)}
  ${(prop) => toPropValue("align-self", prop.alignSelf, prop.theme)}
  ${(prop) => toPropValue("order", prop.order, prop.theme)}
`;

Flex.defaultProps = {
  display: "flex",
};

export default Flex;
