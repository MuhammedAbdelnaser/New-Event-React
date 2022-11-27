import styled from "@emotion/styled";
import { theme } from "../../../../config";

export const AboutUsWrapper = styled("section")`
    label: AboutUsWrapper;
    padding: 5rem 0;
    display: flex;
    gap: 2rem;
    align-items: flex-start;
`
export const Span = styled("span")`
    label: Span;
    font-size: 1.5rem;
    padding-bottom :2rem;
    color: ${theme.secondary};
    `
export const P = styled("p")`
    label: P;
    line-height: 2;
    padding-top: 0.5rem;
    font-size: 1rem;
    color: ${theme.gray};
`