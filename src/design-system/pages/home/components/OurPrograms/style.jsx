import styled from "@emotion/styled";
import theme from "../../../../config";

export const OurProgramsWrapper = styled("section")`
    label: OurProgramsWrapper;
    padding: 5rem 0 2rem;
    width: 940px;
    `
export const Header = styled("h1")`
    label: Header;
    font-weight: bold;
    font-size: 1.8rem;
    color: ${theme.black}
`
export const Span = styled("span")`
    label: Span;
    padding: 2rem 0;
    font-weight: bold;
    cursor: pointer;
`
export const P = styled("p")`
    label: P;
    color: ${theme.gray};
`
export const TabsWrapper = styled("div")`
    label: TabsWrapper;
`
export const Wrapper = styled("div")`
    label: Wrapper;
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
`
export const Line = styled("div")`
    label: Line;
    height: 1px;
    width: 100%;
    background-color: ${theme.gray};
    margin: 0 0 2rem;
`