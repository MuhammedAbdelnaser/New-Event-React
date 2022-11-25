import styled from '@emotion/styled';
import contact from 'images/contact-bg.jpg';
import theme from '../../../../config';

export const ContactWrapper = styled("div")`
    label: ContactWrapper;
    height: 500px;
    padding: 4rem 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${contact}) fixed;
    display: flex;
    justify-content: space between;
`
export const Wrapper = styled("div")`
    label: Wrapper;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
`
export const DownloadDiv = styled("div")`
    label: DownloadDiv;
    width: 50%;
`
export const NavTitle = styled("span")`
    label: NavTitle;
    font-size: 2rem;
    font-weight: bold;
`
export const Event = styled("span")`
    label: Event;
    color: ${theme.primary};
`
export const P = styled("p")`
    label: P;
    line-height: 1.5;
    width: 80%;
    padding-top: 0.5rem;
    font-size: 1rem;
    color: ${theme.gray};
    `
export const DownloadButton = styled("button")`
    label: DownloadButton;
    padding: 1rem 3rem;
    font-size: 1rem;
    border-radius: 1.5rem;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 2rem;
    color: ${theme.white};
    background-color: ${theme.primary};
    border: 1px solid ${theme.white};
    :hover {
        color: ${theme.primary};
        background-color: ${theme.white};
        border: 1px solid ${theme.white};
    }
`
export const FormWrapper = styled("div")`
    label: FormWrapper;
    background-color: ${theme.white};
    border-radius: 20px;
    padding: 3rem;
    margin: 0 2rem;
`
export const FormTitle = styled("span")`
    label: FormTitle;
    font-size: 2rem;
`
export const Touch = styled("span")`
    label: Event;
    color: ${theme.primary};
    `
export const InputsWrapper = styled("div")`
    label: InputsWrapper;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    `
export const Input = styled("input")`
    label: Input;
    padding: 0.5rem;
    margin: 1.5rem;
    font-size: 1.2rem;
    background: transparent;
    color: ${theme.black};
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;  
    ::placeholder {
        font-size: 1rem;  
    }
    `
export const TextArea = styled("textarea")`
    label: TextArea;
    outline: none;
    border: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
`
export const Send = styled("button")`
    label: DownloadButton;
    padding: 1rem 2.5rem;
    font-size: 1rem;
    border-radius: 1.5rem;
    cursor: pointer;
    transition: all 0.3s;
    left: 0;
    color: ${theme.white};
    background-color: ${theme.black};
    border: 1px solid ${theme.white};
    :hover {
        color: ${theme.white};
        background-color: ${theme.primary};
        border: 1px solid ${theme.white};
    }
`