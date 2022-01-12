import styled from 'styled-components';
import type {ThemeProps} from 'components/_common/styles';
import {breakPoint, fontSize, zIndex} from 'styles/units';
import Link from 'next/link';

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
  align-items: center;

  position: relative;
  z-index: ${zIndex.nav};

  @media (max-width: ${breakPoint.tablet}) {
    padding: 12px;
  }
`;

export const Logo = styled.span<ThemeProps>`
  width: 123px;
  height: 27px;
  background: no-repeat center
    url(/assets/logo${(props) => props.theme.darkModeSuffix}.svg);
  display: block;

  cursor: pointer;

  @media (max-width: ${breakPoint.tablet}) {
    width: 27px;
    background: no-repeat center
      url(/assets/logo_icon${(props) => props.theme.darkModeSuffix}.svg);
  }
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
  background: ${(props) => props.theme.color.white};
  font-size: ${fontSize.md};
  border: none;

  @media (max-width: ${breakPoint.mobile}) {
    font-size: ${fontSize.sm};
  }
`;

export const SearchFormInput = styled.input<ThemeProps>`
  color: ${(props) => props.theme.color.gray[0]};
  background: ${(props) => props.theme.color.white};
  width: 160px;
  padding: 0 10px;
  font-size: ${fontSize.md};
  border: none;

  &::placeholder {
    color: ${(props) => props.theme.color.gray[2]};
  }

  @media (max-width: ${breakPoint.mobile}) {
    width: 130px;
    font-size: ${fontSize.sm};
  }
`;
