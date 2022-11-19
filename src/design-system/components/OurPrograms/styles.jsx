import styled from "@emotion/styled";
import theme from "../../config";

export const OurProgramsWrapper = styled("div")`
    label: OurProgramsWrapper;
    display: flex;
    align-items:center;
    gap: 3rem;
    margin-bottom: 1rem;
`
export const Image = styled("img")`
    label: Image;
    border-radius: 50%;
    width: 100%
    `
export const ImageWrapper = styled("div")`
    label: ImageWrapper;
    width: 175px;
`
export const IconWrapper = styled("div")`
    label: IconWrapper;
    display: flex;
    gap: 2rem;
    color: ${theme.gray}
    `
export const Title = styled("h2")`
    label: Title;
    margin: 0.4rem 0;
    color: ${theme.gray}
`
export const Name = styled("span")`
    label: Name;
    font-size: 0.8rem;
    display: block;
    padding: 0.5rem 0;
    color: ${theme.gray}
`
export const Description = styled("p")`
    label: Description;
    color: ${theme.gray};
    line-height: 1.9
`
