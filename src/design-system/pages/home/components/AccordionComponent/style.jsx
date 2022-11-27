import styled from "@emotion/styled";
import { theme } from "../../../../config";

export const AccordionWrapper = styled("section")`
    label: Speakers;
    padding: 3rem 0;
    text-align: center;
`
export const FirstWord = styled("div")`
    label: Header;
    font-size: 1.8rem;
    color: ${theme.black}
`
export const SecondWord = styled("span")`
    label: Span;
    color: ${theme.primary}
`
export const P = styled("p")`
    label: P;
    color: ${theme.gray};
`