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
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
`
export const Title = styled("div")`
    label: Title;
    background-color: ${theme.whiteSmoke};
    padding: 0 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    Justify-content: space-between;
    cursor: pointer;
`
export const H2 = styled("h2")`
    label: H2;
    font-size: 1.3rem;
    font-weight: normal;
    color: ${theme.black};
`
export const Content = styled("div")`
    label: Content;
    text-align: left;
    padding: 0 1rem;
    max-height: 0;
    overflow: hidden;
    transition: 1s all cubic-bezier(0, 1, 0, 1);
    &.show {
        height: auto;
        max-height: 1000px;
        transition: 1s all cubic-bezier(1, 0, 1, 0);
    }
`
export const P = styled("p")`
    label: P;
    color: ${theme.gray};
    padding-bottom: 0.5rem;

`