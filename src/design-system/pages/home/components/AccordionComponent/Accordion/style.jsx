import styled from '@emotion/styled';
import theme from '../../../../../config';

export const Wrapper = styled("div")`
    label: Wrapper;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const AccordionWrapper = styled("div")`
    label: AccordionWrapper;
    width: 70%;
`
export const Item = styled("div")`
    label: Item;
    margin-bottom: 10px;
    box-shadow: 3px 4px 6px -4px ${theme.white};
`
export const Title = styled("div")`
    label: Title;
    background-color: ${theme.whiteSmoke};
    display: flex;
    align-items: center;
    Justify-content: space-between;
    cursor: pointer;
`
export const H2 = styled("h2")`
    label: H2;
    font-size: 1rem;
    color: ${theme.black};
`
export const Content = styled("div")`
    label: Content;
    padding: 0 0.5rem;
    max-height: 0;
    overflow: hidden;
    transition: 0.5 all cubic-bezier(1, 0, 1, 0);
`
export const P = styled("p")`
    label: P;
    color: ${theme.gray};
    padding-bottom: 0.5rem;

`