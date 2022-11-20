import styled from "@emotion/styled";
import background from 'images/intro-bg.jpg';
import theme from '../../../../config';
export const HeaderWrapper = styled("div")`
    label: HeaderWrapper;
    padding: 20% 0;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: url('${background}') fixed;
`
export const H3 = styled("h3")`
    label: H3;
    color: ${theme.white};
    font-size: 1.5rem;
`
export const Title = styled("h1")`
    label: Title;
    color: ${theme.white};
    font-size: 3rem;
`
export const Learn = styled("button")`
    label: Learn;
    color: ${theme.white};
    padding: 1rem 3rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    margin-right: 2rem;
    background-color: transparent;
    border: 1px solid ${theme.white};
    :hover {
        background-color: ${theme.primary};
        border: 1px solid ${theme.white};
    }
`
export const Register = styled("button")`
    label: Register;
    color: ${theme.white};
    padding: 1rem 3rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    background-color: ${theme.primary};
    border: 1px solid ${theme.white};
    :hover {
        background-color: transparent;
        border: 1px solid ${theme.white};
    }
    `