import React from 'react';
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import clsx from "clsx";

const StyledBox = styled(Box, {
  shouldForwardProp: prop => prop !== "ellipsis"
})(({
  ellipsis
}) => ({
  ...(ellipsis && {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  })
}));
export const H1 = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <StyledBox fontSize={30} component="h1" fontWeight={700} ellipsis={ellipsis ? 1 : 0} {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
    {children}
  </StyledBox>;
};
export const H2 = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <StyledBox fontSize={25} component="h2" fontWeight={700} ellipsis={ellipsis ? 1 : 0} {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
    {children}
  </StyledBox>;
};
export const H3 = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <StyledBox fontSize={20} component="h3" fontWeight={700} ellipsis={ellipsis ? 1 : 0} {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
    {children}
  </StyledBox>;
};
export const H4 = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <StyledBox fontSize={17} component="h4" fontWeight={600} ellipsis={ellipsis ? 1 : 0} {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
    {children}
  </StyledBox>;
};
export const H5 = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <StyledBox fontSize={16} lineHeight={1} fontWeight={600} ellipsis={ellipsis ? 1 : 0} {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
    {children}
  </StyledBox>;
};
export const H6 = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <StyledBox fontSize={14} component="h6" fontWeight={600} ellipsis={ellipsis ? 1 : 0} {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
    {children}
  </StyledBox>;
};
export const Paragraph = props => {
  const {
    ellipsis,
    children,
    className,
    ...others
  } = props;
  return <StyledBox fontSize={14} component="p" fontWeight={400} ellipsis={ellipsis ? 1 : 0} {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
    {children}
  </StyledBox>;
};
export const Small = props => {
  const {
    ellipsis = false,
    children,
    className,
    ...others
  } = props;
  return <StyledBox fontSize={12} component="small" fontWeight={400} ellipsis={ellipsis ? 1 : 0} {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
    {children}
  </StyledBox>;
};
export const Span = props => {
  const {
    ellipsis = false,
    children,
    className,
    ...others
  } = props;
  return <StyledBox component="span" ellipsis={ellipsis ? 1 : 0} {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
    {children}
  </StyledBox>;
};
export const Tiny = props => {
  const {
    ellipsis = false,
    children,
    className,
    ...others
  } = props;
  return <StyledBox component="small" fontSize={10} fontWeight={400} ellipsis={ellipsis ? 1 : 0} {...className && {
    className: clsx({
      [className]: true
    })
  }} {...others}>
    {children}
  </StyledBox>;
};