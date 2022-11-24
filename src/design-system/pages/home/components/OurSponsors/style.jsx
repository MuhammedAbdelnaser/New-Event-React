import styled from '@emotion/styled';
import theme from '../../../../config';

export const OurSponsorsWrapper = styled("div")`
    label: OurSponsorsWrapper;
    padding: 4rem 5rem 2rem;
    text-align :center;
    display: flex;
    justify-content: space between;
`
export const Header = styled("h1")`
    label: Header;
    font-weight: bold;
    font-size: 1.8rem;
    color: ${theme.black}
`
export const Span = styled("span")`
    label: Span;
    color: ${theme.primary}
`
export const P = styled("p")`
    label: P;
    color: ${theme.gray};
`
export const SponsorsWrapper = styled("p")`
    label: SponsorsWrapper;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`
export const SectionWrapper = styled("div")`
    label: SectionWrapper;
    display: flex;
    gap: 1.5rem;
    align-items: center;
`