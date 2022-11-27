import styled from '@emotion/styled';
import { theme } from '../../../../config';

export const NavbarWrapper = styled("section")`
    label: NavbarWrapper;
    position: fixed;
    width: 100%;
    padding: 1.2rem 0;
    color: ${theme.white};
    background-color: ${theme.secondary}
`
export const NavContainer = styled("div")`
    label: NavContainer;
    display: flex;
    justify-content: space-between;
    align-items:center
`
export const NavTitle = styled("span")`
    label: NavTitle;
    font-size: 1.5rem;
`
export const Event = styled("span")`
    label: Event;
    color: ${theme.primary};
`
export const Link = styled("a")`
    label: Link;
    color: ${theme.white};
    font-size: 1rem;
    padding: 0.5rem;
    text-decoration: none;
`
export const LinksWrapper = styled("div")`
    label: LinksWrapper;
    gap: 1.5rem;
    display: flex;
    align-items: center;
`
