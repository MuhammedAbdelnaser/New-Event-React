import styled from '@emotion/styled';
import register from 'images/register-bg.jpg';
import theme from '../../../../config';

export const RegisterHereWrapper = styled("div")`
    label: RegisterHereWrapper;
    height: 450px;
    padding: 3rem 0;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${register}) fixed;
    display: flex;
    justify-content: space between
`
export const Header = styled("h1")`
    label: Header;
    font-weight: bold;
    font-size: 1.8rem;
    color: ${theme.white}
    `
export const H3 = styled("h3")`
    label: H3;
    font-weight: bold;
    color: ${theme.white}
    `
export const Span = styled("span")`
    label: Span;
    color: ${theme.primary};
    padding: 2rem 0;
    font-weight: bold;
    cursor: pointer;
`
export const P = styled("p")`
    label: P;
    color: ${theme.gray};
`