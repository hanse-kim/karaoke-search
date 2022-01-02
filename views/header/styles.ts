import styled from 'styled-components';
import type {ThemeProps} from 'components/_common/styles';
import {fontSize, zIndex} from 'styles/units';

export const HeaderWrapper = styled.header<ThemeProps>`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0 0 15px 0 rgba(0 0 0 / 0.25);
`;

export const HeaderInner = styled.div`
  width: 720px;
  position: relative;
`;

export const HeaderNav = styled.nav`
  padding: 8px 12px;

  display: flex;
  justify-content: space-between;

  position: relative;
  z-index: ${zIndex.nav};
`;

export const Logo = styled.a`
  width: 123px;
  height: 27px;
  background: no-repeat center url(/assets/logo.svg);
  display: block;
`;

export const SearchFormWrapper = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
`;

export const SearchFormInputWrapper = styled.div<ThemeProps>`
  display: flex;
  padding-bottom: 2px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray[0]};

  position: relative;
  z-index: ${zIndex.nav};
`;

export const SearchFormSelect = styled.select<ThemeProps>`
  color: ${(props) => props.theme.color.gray[0]};
  font-size: ${fontSize.md};
  border: none;
`;

export const SearchFormInput = styled.input<ThemeProps>`
  color: ${(props) => props.theme.color.gray[0]};
  width: 160px;
  padding: 0 10px;
  font-size: ${fontSize.md};
  border: none;

  &::placeholder {
    color: ${(props) => props.theme.color.gray[2]};
  }
`;