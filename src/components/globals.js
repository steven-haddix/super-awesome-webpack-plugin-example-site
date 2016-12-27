import { css } from 'styled-components';

const sizes = {
    giant: 1200,
    desktop: 992,
    tablet: 768,
    phone: 480,
    custom: 320
};

// iterate through the sizes and create a media template
/* eslint-disable */
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
    return accumulator;
}, {});

const gridColumns = 12;

export const clear = () => {
    return css`
        &:before,
        &:after {
            content: " ";
            display: table;
        }
        &:after {
            clear: both;
        }
    `;
}

export const column = (columns, size, gridGutter = 30) => {
    return css`
        position: relative;
        // Prevent columns from collapsing when empty
        min-height: 1px;
        // Inner gutter via padding
        padding-left: ${gridGutter / 2}px;
        padding-right: ${gridGutter / 2}px;
        
        ${media[size]`
            float: left;
            width: ${100 * (columns / gridColumns)}%;
        `}
    `;
};

export const row = (gridGutter = 30) => {
    return css`
        margin-left: ${Math.ceil(gridGutter / -2)}px;
        margin-right: ${Math.floor(gridGutter / -2)}px;
        ${clear()}
    `;
}

const containerSizes = {
    // Small screen / tablet
    tablet: 750,

    // Medium screen / desktop
    desktop: 970,

    // Large screen / wide desktop
    giant: 1170
};

export const container = (gridGutter = 30) => {
    return css`
        margin-right: auto;
        margin-left: auto;
        padding-left: ${Math.floor(gridGutter / 2)}px;
        padding-right: ${Math.ceil(gridGutter / 2)}px;
        
        ${clear()}
        
        ${media['tablet']`
            width: ${containerSizes['tablet']}px;
        `}
        
        ${media['desktop']`
            width: ${containerSizes['desktop']}px;
        `}
        
        ${media['giant']`
            width: ${containerSizes['giant']}px;
        `}
    `;
}