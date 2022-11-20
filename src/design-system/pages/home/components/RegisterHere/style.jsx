import styled from '@emotion/styled';
import register from 'images/register-bg.jpg';
import theme from '../../../../config';

export const RegisterHereWrapper = styled("div")`
    label: RegisterHereWrapper;
    height: 400px;
    padding: 4rem 5rem 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${register}) fixed;
    display: flex;
    justify-content: space between
`
export const RegisterContainer = styled("div")`
    label: RegisterContainer;
    display: flex;
    justify-content: space-between;

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
    line-height: 1.7;
`
export const FormWrapper = styled("div")`
    label: FormWrapper;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
export const RegisterInput = styled("input")`
    label: RegisterInput;
    padding: 0.9rem;
    margin: 0.5rem;
    background: transparent;
    color: ${theme.white};
    border: 2px solid ${theme.white};
    border-radius: 5px;
    outline: none;
    font-size: 1rem;  
    ::placeholder {
        font-size: 1rem;  
    }
`
export const Learn = styled("button")`
    label: Learn;
    color: ${theme.primary};
    padding: 1rem 3rem;
    font-size: 1rem;
    border-radius: 1.5rem;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 1rem;
    background-color: ${theme.white};
    border: 1px solid ${theme.white};
    :hover {
        color: ${theme.white};
        background-color: ${theme.primary};
        border: 1px solid ${theme.white};
    }
`