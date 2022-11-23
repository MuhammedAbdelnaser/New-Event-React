import styled from '@emotion/styled';
import venue from 'images/venue-bg.jpg';
import theme from '../../../../config';

export const VenueWrapper = styled("div")`
    label: VenueWrapper;
    height: 400px;
    padding: 4rem 5rem 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${venue}) fixed;
    display: flex;
    justify-content: space between
`
export const H3 = styled("h3")`
    label: h3;
    color: ${theme.primary};
    font-size: 2rem;
    `
export const P = styled("p")`
    label: P;
    font-size: 1rem;
    display: block;
    color: ${theme.gray};
    line-height: 1.8;
    margin-bottom: 2rem;
    width: 600px;
`
export const Span = styled("span")`
    label: Span;
    display: block;
    font-size: 1.1rem;
    color: ${theme.black};
    padding: 0.5rem 0;
    font-weight: bold;
`