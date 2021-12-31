import React from 'react';
import {css} from 'styled-components';
import type {Theme} from 'styles/theme';

export interface SizeProps {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
}

export interface MarginProps {
  margin?: React.CSSProperties['margin'];
  marginTop?: React.CSSProperties['marginTop'];
  marginBottom?: React.CSSProperties['marginBottom'];
  marginLeft?: React.CSSProperties['marginLeft'];
  marginRight?: React.CSSProperties['marginRight'];
}

export interface PaddingProps {
  padding?: React.CSSProperties['padding'];
  paddingTop?: React.CSSProperties['paddingTop'];
  paddingBottom?: React.CSSProperties['paddingBottom'];
  paddingLeft?: React.CSSProperties['paddingLeft'];
  paddingRight?: React.CSSProperties['paddingRight'];
}

export interface LayoutProps {
  display?: React.CSSProperties['display'];
  position?: React.CSSProperties['position'];
  flex?: React.CSSProperties['flex'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
}

export interface BoxModelProps
  extends SizeProps,
    MarginProps,
    PaddingProps,
    LayoutProps {}

export interface StackProps {
  spacing?: string;
  isHorizontal?: boolean;
}

export interface ThemeProps {
  theme: Theme;
}

export type WithThemeProps<T> = T & ThemeProps;

const sizeStyles = (props: SizeProps) => css`
  width: ${props.width};
  height: ${props.height};
`;

const marginStyles = (props: MarginProps) => css`
  margin: ${props.margin};
  margin-top: ${props.marginTop};
  margin-bottom: ${props.marginBottom};
  margin-left: ${props.marginLeft};
  margin-right: ${props.marginRight};
`;

const paddingStyles = (props: PaddingProps) => css`
  padding: ${props.padding};
  padding-top: ${props.paddingTop};
  padding-bottom: ${props.paddingBottom};
  padding-left: ${props.paddingLeft};
  padding-right: ${props.paddingRight};
`;

const layoutStyles = (props: LayoutProps) => css`
  display: ${props.display};
  position: ${props.position};
  flex: ${props.flex};
  justify-content: ${props.justifyContent};
  align-items: ${props.alignItems};
`;

export const boxModelStyles = (props: BoxModelProps) => css`
  ${sizeStyles(props)};
  ${marginStyles(props)};
  ${paddingStyles(props)};
  ${layoutStyles(props)};
`;

export const stackStyles = (props: StackProps) => css`
  flex-direction: ${props.isHorizontal ? 'row' : 'column'};
  & > * + * {
    margin-top: ${props.isHorizontal ? undefined : props.spacing};
    margin-left: ${props.isHorizontal ? props.spacing : undefined};
  }
`;
