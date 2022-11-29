import styled from "@emotion/styled";
import { theme } from "../../../../config";

export const FooterWrapper = styled("footer")`
    label: FooterWrapper;
    padding: 5rem;
    text-align: center;
`
export const Span = styled("span")`
    label: Span;
    color: ${theme.gray};
`
export const MadeBy = styled("span")`
    label: MadeBy;
    color: ${theme.primary};
    font-weight: bold;
    font-family: 'Open Sans';
`
export const Ul = styled("ul")`
    label: Ul;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-top: 3rem;
    list-style: none;
`
export const Li = styled("li")`
    label: Li;
    :hover {
        background-color: ${theme.primary};
        color: ${theme.white};
    };
    padding: 0.5rem;
    color: ${theme.gray};
    transition: 0.5s all;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`